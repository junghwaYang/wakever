'use client';

import { Timer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AfreecaChannel } from '@/lib/fetchAfreecaLive';

export default function Live({ data }: { data: AfreecaChannel }) {
  const { BNO, TITLE, CATEGORY_TAGS, BJID, BTIME } = data;
  const thumbnailUrl = `https://liveimg.sooplive.co.kr/h/${BNO}.webp`;

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div className={cn('flex items-center justify-center gap-1 py-2', 'bg-red-400')}>
        <span className="size-2 rounded-full bg-white"></span>
        <span className="text-sm font-bold text-white">ON AIR</span>
      </div>

      <div>
        <Link href={`https://play.sooplive.co.kr/${BJID}`} className="block">
          <Image
            src={thumbnailUrl ? thumbnailUrl : ''}
            alt="라이브 방송 썸네일"
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
          <div className="flex items-center gap-2 px-5 py-2">
            <Image
              src={`https://profile.img.sooplive.co.kr/LOGO/rr/${BJID}/${BJID}.jpg`}
              alt="우왁굳 프로필"
              width={34}
              height={34}
            />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-800">{TITLE}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                {CATEGORY_TAGS.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Timer className="size-4" /> {formatTime(BTIME)}
            </span>
          </div>
        </Link>
        <div className="my-5 h-2 bg-gray-50" />
      </div>
    </div>
  );
}
