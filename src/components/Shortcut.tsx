import { Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Shortcut() {
  const shortcutList = [
    {
      name: '왁물원',
      href: 'https://woowakgood.com/',
      image: '/shortcut/wak-zoo.png',
    },
    {
      name: 'soop',
      href: 'https://ch.sooplive.co.kr/ecvhao',
      image: '/shortcut/soop.png',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com/@woowakgood',
      image: '/shortcut/youtube.png',
    },
  ];

  return (
    <div className="bg-gray-50 py-5">
      <div className="container mx-auto px-5">
        <h2 className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
          <LinkIcon className="size-3" />
          <span>바로가기</span>
        </h2>
        <ul className="flex gap-2">
          {shortcutList.map((shortcut) => (
            <li key={shortcut.name} className="size-12 overflow-hidden rounded-[20px]">
              <Link href={shortcut.href}>
                <Image src={shortcut.image} alt={shortcut.name} width={50} height={50} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
