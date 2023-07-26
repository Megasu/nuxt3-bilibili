<script setup lang="ts">
// 设置网站 SEO 信息
useSeoMeta({
  title: '黑马 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  description:
    'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
  // 绕开 B 站的防盗链
  referrer: 'no-referrer',
})
</script>

<template>
  <!-- Nuxt 页面容器，相当于 Vue 的 router-view -->
  <NuxtPage :keepalive="{ max: 10 }" />
  <!-- 返回顶部 -->
  <van-back-top :right="10" />
</template>

<style lang="scss">
@import './assets/styles/base.scss';
@import './assets/styles/iconfont.scss';
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
