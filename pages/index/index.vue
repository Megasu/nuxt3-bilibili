<script setup lang="ts">
//
</script>

<template>
  <!-- 头部 -->
  <header class="app-header">
    <!-- logo -->
    <a class="logo" href="#">
      <i class="iconfont Navbar_logo"></i>
    </a>
    <!-- 搜索 -->
    <a class="search" href="#">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <!-- 头像 -->
    <a class="face" href="#">
      <img src="@/assets/images/login.png" />
    </a>
    <!-- 下载按钮 -->
    <div class="down-app">下载 APP</div>
  </header>
  <!-- 频道选项 -->
  <van-tabs>
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<style lang="scss">
:root {
  --van-primary-color: #fb7299 !important;
}
.app-header {
  display: flex;
  align-items: center;
  padding: 2vw 3vw;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      color: #fb7299;
      font-size: 7.46667vw;
    }
  }
  .search {
    padding: 0 2vw;
    .ic_search_tab {
      color: #ccc;
      font-size: 5.86667vw;
    }
  }
  .face {
    padding: 0 4vw;
    img {
      width: 6.4vw;
    }
  }
  .down-app {
    font-size: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
