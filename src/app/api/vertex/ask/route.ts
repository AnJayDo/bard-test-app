import { NextResponse } from 'next/server'
import * as vertexAI from '../../../lib/vertexAI'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const message = searchParams.get('message')
  if(!message) {
    return NextResponse.json(new Error('Message cannot be empty!'))
  }
  const data = await vertexAI.askVertex(message as string);
  return NextResponse.json({ question: message, message: data[0].structValue.fields.candidates.listValue.values[0].structValue.fields })
}