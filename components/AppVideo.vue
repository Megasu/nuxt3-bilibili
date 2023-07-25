<script setup lang="ts">
import { VideoItem } from 'types/video'

defineProps<{
  item: VideoItem
}>()

const parseView = (view: number) => {
  if (view === 0) return '--'
  return view > 10000 ? `${(view / 10000).toFixed(1)}万` : view
}
</script>

<template>
  <NuxtLink class="v-card" :to="`/video/${item.bvid}`">
    <div class="card">
      <div class="card-img">
        <img class="pic" :src="item.pic" :alt="item.title" />
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          {{ parseView(item.stat.view) }}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          {{ parseView(item.stat.danmaku) }}
        </span>
      </div>
    </div>
    <p class="title">{{ item.title }}</p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.v-card {
  width: 50%;
  padding: 2vw 1vw;
  .card {
    position: relative;
    background: #f3f3f3 url(@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 0.53333vw;
    overflow: hidden;
    .card-img {
      .pic {
        height: 100px;
        width: 100%;
        object-fit: cover;
      }
    }
    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2vw 1.5vw;
      span {
        .iconfont {
          font-size: 3vw;
        }
      }
    }
  }
  .title {
    margin-top: 1.5vw;
    font-size: 3.2vw;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
