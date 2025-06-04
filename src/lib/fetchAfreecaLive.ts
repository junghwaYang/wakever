import axios from 'axios';

// lib/fetchAfreecaLive.ts
export type AfreecaChannel = {
  BNO: number;
  BJID: string;
  BJNICK: string;
  TITLE: string;
  CATEGORY_TAGS: string[];
  BTIME: number;
};

export type AfreecaResponse = { status: 'on'; channel: AfreecaChannel } | { status: 'off' };

export async function fetchAfreecaLive(bid: string): Promise<AfreecaResponse> {
  const body = new URLSearchParams({ bid }).toString();

  try {
    const res = await axios.post('https://live.afreecatv.com/afreeca/player_live_api.php', body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0',
        Accept: 'application/json',
      },
    });

    const json = res.data;

    if (json.CHANNEL.RESULT === 1) {
      return { status: 'on', channel: json.CHANNEL };
    } else {
      return { status: 'off' };
    }
  } catch (error) {
    console.error('Afreeca Live Fetch Error:', error);
    return { status: 'off' };
  }
}
