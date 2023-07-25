<script setup lang="ts">
// 获取频道列表
const { data: channelList } = await useFetch('/api/channel')
</script>

<template>
  <!-- 公共头部 -->
  <AppHeader />
  <!-- 频道 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name">
      {{ item.name }}
    </van-tab>
  </van-tabs>
</template>

<style lang="scss">
//
</style>
