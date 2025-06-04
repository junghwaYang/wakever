import Notice from '@/components/Notice';
import Shortcut from '@/components/Shortcut';
import YoutubeList from '@/components/YoutubeList';

export default function Home() {
  return (
    <div>
      <Shortcut />
      <Notice notice="중요한 공지사항" date="2025.01.01" />
      <YoutubeList />
    </div>
  );
}
