import Live from '@/components/Live';
import Notice from '@/components/Notice';
import Shortcut from '@/components/Shortcut';
import { fetchAfreecaLive } from '@/lib/fetchAfreecaLive';

const bid = 'ecvhao'; // 원하는 BJ ID
const live = await fetchAfreecaLive(bid);
export default function Home() {
  return (
    <div>
      <Shortcut />
      <Notice notice="중요한 공지사항" date="2025.01.01" />
      {live.status === 'off' ? (
        <div className="flex items-center justify-center gap-1 bg-gray-200 py-2">
          <span className="size-2 rounded-full bg-white"></span>
          <span className="text-sm font-bold text-white">OFF AIR</span>
        </div>
      ) : (
        <Live data={live.channel} />
      )}
    </div>
  );
}
