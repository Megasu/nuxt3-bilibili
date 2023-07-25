<script setup lang="ts"></script>

<template>
  <!-- 头部 -->
  <header class="app-header">
    <!-- logo -->
    <NuxtLink class="logo" to="/">
      <i class="iconfont Navbar_logo"></i>
    </NuxtLink>
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
</template>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      color: #fb7299;
      font-size: 28px;
    }
  }
  .search {
    padding: 0 8px;
    .ic_search_tab {
      color: #ccc;
      font-size: 22px;
    }
  }
  .face {
    padding: 0 15px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .down-app {
    font-size: 12px;
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
