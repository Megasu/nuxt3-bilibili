<script setup lang="ts">
import type { VideoItem } from 'types/video'

// 获取频道列表
const { data: channelList } = await useFetch('/api/channel')
// 获取热门视频列表
const { data: hotList } = await useFetch('/api/hot')

// 视频列表-分页
const list = ref<VideoItem[]>([])
const loading = ref(false)
const finished = ref(false)

// 页码
let page = 1
// 加载更多
const onLoad = async () => {
  // 加载状态开始
  loading.value = true
  // 根据页码截取数据
  const slice = hotList.value?.slice((page - 1) * 10, page * 10) as VideoItem[]
  // 追加到渲染列表中
  list.value.push(...slice)
  // 页码 +1
  page++
  // 加载状态结束
  loading.value = false
  // 数据加载完毕
  if (list.value.length === hotList.value?.length) {
    finished.value = true
  }
}

// 服务端渲染
onLoad()
</script>

<template>
  <!-- Sticky 粘性布局 -->
  <van-sticky class="sticky">
    <!-- 公共头部 -->
    <AppHeader />
    <!-- 频道 -->
    <van-tabs>
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>
  </van-sticky>
  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
    <div class="video-list">
      <AppVideo v-for="item in list" :key="item.aid" :item="item" />
    </div>
  </van-list>
</template>

<style lang="scss" scoped>
.sticky {
  background-color: #fff;
}
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
