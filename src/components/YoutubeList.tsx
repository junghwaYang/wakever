'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchChannelsInfo, fetchChannelVideos, fetchVideosStats } from '@/service/youtube';

interface YouTubeChannel {
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  statistics: {
    subscriberCount: string;
  };
}

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    publishedAt: string;
  };
  statistics?: {
    viewCount: string;
  };
}

interface VideoStats {
  id: string;
  statistics: {
    viewCount: string;
  };
}

const channelId = [
  'UCBkyj16n2snkRg1BAzpovXQ', // @woowakgood
  'UCzh4yY8rl38knH33XpNqXbQ', // @waktaverse
  'UCZOcwheypMvYN_J2oRBgt2A', // @zerowaktaverse
  'UChCqDNXQddSr0ncjs_78duA', // @wakjonggame
];

export default function YoutubeList() {
  const [channels, setChannels] = useState<YouTubeChannel[]>([]);
  const [channelVideos, setChannelVideos] = useState<Record<string, YouTubeVideo[]>>({});
  const [error, setError] = useState<string | null>(null);

  const formatSubscriberCount = (count: string) => {
    const num = Number(count);
    return `${num / 10000}만명`;
  };

  const formatViewCount = (count: string) => {
    const num = Number(count);
    if (num >= 100000000) {
      return `${(num / 100000000).toFixed(1)}억회`;
    } else if (num >= 10000) {
      return `${(num / 10000).toFixed(1)}만회`;
    } else {
      return `${num.toLocaleString()}회`;
    }
  };

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds}초 전`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays}일 전`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks}주 전`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths}개월 전`;
    }

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears}년 전`;
  };

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const data = await fetchChannelsInfo(channelId);

        if (!data || !data.items || !Array.isArray(data.items)) {
          throw new Error('Invalid data format received from API');
        }

        setChannels(data.items);

        // 각 채널의 최신 영상 가져오기
        const videosPromises = data.items.map(async (channel: YouTubeChannel) => {
          const videos = await fetchChannelVideos(channel.id);
          if (!videos || !videos.items || !Array.isArray(videos.items)) {
            console.warn(`No videos found for channel ${channel.id}`);
            return { channelId: channel.id, videos: [] };
          }
          return { channelId: channel.id, videos: videos.items };
        });

        const videosResults = await Promise.all(videosPromises);
        const videosMap = videosResults.reduce(
          (acc, { channelId, videos }) => {
            acc[channelId] = videos;
            return acc;
          },
          {} as Record<string, YouTubeVideo[]>
        );

        // 각 영상의 통계 정보 가져오기
        const allVideos = Object.values(videosMap).flat() as YouTubeVideo[];
        if (allVideos.length > 0) {
          const allVideoIds = allVideos.map((video) => video.id.videoId);
          const statsData = await fetchVideosStats(allVideoIds);

          if (statsData && statsData.items && Array.isArray(statsData.items)) {
            const statsMap = statsData.items.reduce(
              (acc: Record<string, { viewCount: string }>, video: VideoStats) => {
                acc[video.id] = video.statistics;
                return acc;
              },
              {}
            );

            // 영상 정보에 통계 추가
            Object.keys(videosMap).forEach((channelId) => {
              videosMap[channelId] = videosMap[channelId].map((video: YouTubeVideo) => ({
                ...video,
                statistics: statsMap[video.id.videoId],
              }));
            });
          }
        }

        setChannelVideos(videosMap);
        setError(null);
      } catch (error) {
        console.error('Error fetching channels:', error);
        setError('채널 정보를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchChannels();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <ul>
      {channels.map((channel) => (
        <li key={channel.id} className="border-b p-4">
          <div className="mb-4 flex items-center gap-4">
            <Link
              href={`https://www.youtube.com/channel/${channel.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <Image
                src={channel.snippet.thumbnails.default.url}
                alt={channel.snippet.title}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">{channel.snippet.title}</h3>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <p>{channel.snippet.customUrl}</p>
                  <span className="size-[2px] rounded-full bg-gray-400"></span>
                  <p>구독자 {formatSubscriberCount(channel.statistics.subscriberCount)}</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {channelVideos[channel.id]?.map((video) => (
              <Link
                key={video.id.videoId}
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-80"
              >
                <div className="relative mb-2 aspect-video">
                  <Image
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    fill
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
                <h4 className="line-clamp-2 font-medium">{video.snippet.title}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <p>{formatRelativeTime(video.snippet.publishedAt)}</p>
                  {video.statistics && (
                    <>
                      <span className="size-[2px] rounded-full bg-gray-400"></span>
                      <p>조회수 {formatViewCount(video.statistics.viewCount)}</p>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
