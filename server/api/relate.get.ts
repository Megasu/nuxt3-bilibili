import video from '@/database/video'

export default defineEventHandler((event) => {
  const list = video.slice(20, 40)
  return list
})
