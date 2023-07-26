/**
 * 转换视频播放量/弹幕数
 * @param view 数量
 */
export const parseView = (view: number) => {
  if (view === 0) return '--'
  return view > 10000 ? `${(view / 10000).toFixed(1)}万` : view
}
