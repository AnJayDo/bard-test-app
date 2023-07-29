import { askBard } from '@/app/lib/bardService';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { searchParams } = new URL(request.url)
  const message = searchParams.get('message')
  if(!message) {
    return NextResponse.json({ 
      question: message,
      answer: 'Empty message'
    });
  }
  const data = await askBard(message as string);  
  return NextResponse.json({ 
    question: message,
    answer: data
  });
}
