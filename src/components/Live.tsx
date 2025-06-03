import { cn } from '@/lib/utils';
import { Timer, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Live() {
  // TODO: 실제 방송 상태를 확인하는 로직 추가
  const hasOnAir = false;

  const liveLink = 'https://play.sooplive.co.kr/ecvhao';

  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-center gap-1 py-2',
          hasOnAir ? 'bg-red-400' : 'bg-gray-200'
        )}
      >
        <span className="size-2 rounded-full bg-white"></span>
        <span className="text-sm font-bold text-white">{hasOnAir ? 'ON AIR' : 'OFF AIR'}</span>
      </div>

      {hasOnAir && (
        <div>
          <Link href={liveLink} className="block">
            <div className="relative h-60 overflow-hidden">
              <span className="absolute top-3 left-5 flex items-center justify-center gap-1 rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-white opacity-50">
                <UsersRound className="size-3" /> 123,123명
              </span>
            </div>

            <div className="flex items-center gap-2 px-5 py-2">
              <Image src="/shortcut/wak-zoo.png" alt="라이브 방송" width={34} height={34} />
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800">방제가 들어갈 공간</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>#태그</span>
                  <span>#태그</span>
                  <span>#태그</span>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Timer /> 00:00:01
              </span>
            </div>
          </Link>
          <div className="my-5 h-2 bg-gray-50" />
        </div>
      )}
    </div>
  );
}
