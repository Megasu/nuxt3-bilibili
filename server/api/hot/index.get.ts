import video from '@/database/video'

export default defineEventHandler((event) => {
  // 返回所有视频
  return video
})
