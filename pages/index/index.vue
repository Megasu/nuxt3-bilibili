<script setup lang="ts">
// 获取频道列表
const { data: channelList } = await useFetch('/api/channel')
const { data: hotList } = await useFetch('/api/hot')
</script>

<template>
  <!-- Sticky 粘性布局 -->
  <van-sticky>
    <!-- 公共头部 -->
    <AppHeader />
    <!-- 频道 -->
    <van-tabs>
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name">
      </van-tab>
    </van-tabs>
  </van-sticky>
  <!-- 视频列表 -->
  <div class="video-list">
    <AppVideo v-for="item in hotList" :key="item.aid" :item="item" />
  </div>
</template>

<style lang="scss">
.video-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
