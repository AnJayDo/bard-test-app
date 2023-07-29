import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json({ name: 'Test Bard API endpoint built on Nextjs' })
}