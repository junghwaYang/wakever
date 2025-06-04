import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const searchParams = request.nextUrl.searchParams;
  const channelIds = searchParams.get('ids');

  if (!channelIds) {
    return NextResponse.json({ error: 'Channel IDs are required' }, { status: 400 });
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelIds}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json(data);
}
