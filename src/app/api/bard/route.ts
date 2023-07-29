import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ name: 'Test Bard API endpoint built on Nextjs' });
}
