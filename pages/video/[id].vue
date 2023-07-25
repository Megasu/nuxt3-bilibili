<script setup lang="ts">
import type { BarrageInstance } from 'vant'

// 弹幕相关
const barrageList = ref([
  { id: 100, text: '轻量' },
  { id: 101, text: '可定制的' },
  { id: 102, text: '移动端' },
  { id: 103, text: 'Vue' },
  { id: 104, text: '组件库' },
  { id: 105, text: 'VantUI' },
  { id: 106, text: '666' },
])

const barrageRef = ref<BarrageInstance>()

const onPlay = () => {
  barrageRef.value?.play()
}

const onPause = () => {
  barrageRef.value?.pause()
}

// 通过路由参数获取视频id
const route = useRoute()
const { data: detail } = await useFetch(`/api/hot/${route.params.id}`)
const { data: relateList } = await useFetch(`/api/relate`)

// 动态设置标题
useSeoMeta({
  title: `${detail.value?.title}_哔哩哔哩bilibili_${detail.value?.author.name}`,
})
</script>

<template>
  <!-- Sticky 粘性布局 -->
  <VanSticky>
    <!-- 头部 -->
    <AppHeader />
    <!-- 弹幕 -->
    <van-barrage v-model="barrageList" :auto-play="false" ref="barrageRef">
      <!-- 视频 -->
      <video
        controls
        class="video-play"
        ref="videoRef"
        @play="onPlay"
        @pause="onPause"
        :poster="detail?.pic"
        src="https://cn-sxxa-cu-02-02.bilivideo.com/upgcxcode/76/15/1208811576/1208811576-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1690288095&gen=playurlv2&os=bcache&oi=1928469037&trid=00003e71024043e849dc8ebaea65c5551be1h&mid=346944746&platform=html5&upsig=5bbfae54352c1a427a7ef41eb8af23a2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=86604&bvc=vod&nettype=0&bw=51178&logo=80000000"
      ></video>
    </van-barrage>
  </VanSticky>
  <!-- 标题作者信息 -->
  <div class="info">
    <h1 class="title-text">{{ detail?.title }}</h1>
    <div class="body">
      <div class="author">
        <img class="avatar" :src="detail?.author.face" />
        <span class="name">{{ detail?.author.name }}</span>
      </div>
    </div>
  </div>
  <!-- 相关推荐 -->
  <div class="relate">
    <h3 class="relate-title">相关推荐</h3>
    <div class="relate-list">
      <AppVideo v-for="item in relateList" :key="item.aid" :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-play {
  width: 100vw;
  height: auto;
}

.info {
  padding: 10px;
  border-bottom: 1px solid #eee;
  .title-text {
    font-size: 16px;
    font-weight: normal;
  }

  .body {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
  }

  .author {
    display: flex;
    align-items: center;
    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    .name {
      margin-left: 10px;
      font-size: 14px;
    }
  }
}

.relate {
  .relate-title {
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
    padding: 0 10px;
    color: #333;
  }
  .relate-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
  }
}
</style>
