import axios from 'axios';

export const fetchChannelsInfo = async (channelIds: string[]) => {
  const ids = channelIds.join(',');
  const response = await axios.get(`/api/channels?ids=${ids}`);
  return response.data;
};

export const fetchChannelVideos = async (channelId: string) => {
  const response = await axios.get(`/api/channels/videos?channelId=${channelId}`);
  return response.data;
};

export const fetchVideosStats = async (videoIds: string[]) => {
  const ids = videoIds.join(',');
  const response = await axios.get(`/api/channels/videos/stats?videoIds=${ids}`);
  return response.data;
};
