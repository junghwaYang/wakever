import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const searchParams = request.nextUrl.searchParams;
  const videoIds = searchParams.get('videoIds');

  if (!videoIds) {
    return NextResponse.json({ error: 'Video IDs are required' }, { status: 400 });
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json(data);
}
