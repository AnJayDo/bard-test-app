import { askBard } from '@/app/lib/bardService';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const data = await askBard('The latest update of Bard');  
  return NextResponse.json({ 
    question: 'The latest update of Bard',
    answer: data
  });
}
