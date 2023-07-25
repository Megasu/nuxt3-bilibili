<script setup lang="ts">
import type { BarrageInstance } from 'vant'

const list = ref([
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
</script>

<template>
  <AppHeader />
  <van-barrage v-model="list" :auto-play="false" ref="barrageRef">
    <video
      controls
      class="video-play"
      ref="videoRef"
      @play="onPlay"
      @pause="onPause"
      src="https://cn-sxxa-cu-02-03.bilivideo.com/upgcxcode/76/15/1208811576/1208811576-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1690274881&gen=playurlv2&os=bcache&oi=1928469037&trid=00006743db0626084b48b458cf83d282bca1h&mid=0&platform=html5&upsig=742e2554cac6b8783d3657d9b3571a70&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=86606&bvc=vod&nettype=0&bw=51178&logo=80000000"
    ></video>
  </van-barrage>
</template>

<style lang="scss" scoped>
.video-play {
  width: 100vw;
  height: auto;
}
</style>
