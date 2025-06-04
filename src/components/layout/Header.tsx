import Link from 'next/link';
import Image from 'next/image';
import { Bell, Search } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between px-5">
        <SidebarTrigger />
        <h1>
          <Link href="/">
            <Image src="/logo.svg" alt="wakever" width={99} height={26} />
          </Link>
        </h1>
        <div className="flex items-center gap-4 text-gray-400">
          <Search className="size-6" />
          <Bell className="size-6" />
        </div>
      </div>
    </header>
  );
}
