import aiplatform from '@google-cloud/aiplatform';
import { helpers } from '@google-cloud/aiplatform';

// Imports the Google Cloud Prediction service client
const {PredictionServiceClient} = aiplatform.v1;

// Import the helper module for converting arbitrary protobuf.Value objects.

// Specifies the location of the api endpoint
const clientOptions = {
  apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};
const publisher = 'google';
const model = "chat-bison";

// Instantiates a client
const predictionServiceClient = new PredictionServiceClient(clientOptions);

async function requestPrompt(prompt) {
  const project = "cloudstorage-381913";
  const location = 'us-central1';
  const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;
  const instanceValue = helpers.toValue(prompt);
  const instances = [instanceValue];

  const parameter = {
    temperature: 0.2,
    maxOutputTokens: 256,
    topP: 0.95,
    topK: 40,
  };
  const parameters = helpers.toValue(parameter);

  const request= {
    endpoint,
    instances,
    parameters,
  };

  // Predict request
  const [response] = await predictionServiceClient.predict(request);
  const predictions = response.predictions;
  return predictions;
}

export async function callPredict() {
  const project = "cloudstorage-381913";
  const location = 'us-central1';
  const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;
  const prompt = {
    context:
      'My name is Miles. You are an astronomer, knowledgeable about the solar system.',
    examples: [
      {
        input: {content: 'How many moons does Mars have?'},
        output: {
          content: 'The planet Mars has two moons, Phobos and Deimos.',
        },
      },
    ],
    messages: [
      {
        author: 'user',
        content: 'How many planets are there in the solar system?',
      },
    ],
  };
  const instanceValue = helpers.toValue(prompt);
  const instances = [instanceValue];

  const parameter = {
    temperature: 0.2,
    maxOutputTokens: 256,
    topP: 0.95,
    topK: 40,
  };
  const parameters = helpers.toValue(parameter);

  const request = {
    endpoint,
    instances,
    parameters,
  };

  // Predict request
  const [response] = await predictionServiceClient.predict(request);
  console.log('Get chat prompt response');
  const predictions = response.predictions;
  console.log('\tPredictions :');
  for (const prediction of predictions) {
    console.log(`\t\tPrediction : ${JSON.stringify(prediction)}`);
  }
}

export async function versionInfo() {
  const prompt = {
    context: '',
    examples: [],
    messages: [
      {
        author: 'user',
        content: 'What is the latest update of Vertex AI?',
      },
    ],
  };
  return await requestPrompt(prompt);
}

export async function askVertex(message) {
  console.log('Asking: ', message)
  const prompt = {
    context: '',
    examples: [],
    messages: [
      {
        author: 'user',
        content: message,
      },
    ],
  };
  return await requestPrompt(prompt)
}