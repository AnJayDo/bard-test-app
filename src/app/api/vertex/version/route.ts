import { NextResponse } from 'next/server'
import * as vertexAI from '../../../lib/vertexAI'
 
export async function GET() {
  // await vertexAI.callPredict();
  const data = await vertexAI.versionInfo();
  return NextResponse.json({ name: 'Test Vertex API endpoint built on Nextjs', message: data[0].structValue.fields.candidates.listValue.values[0].structValue.fields })
}