# Nuxt3 - 哔哩哔哩 - 项目实战

## 简介

Nuxt 框架提供了一种基于 Node.js 的**服务端渲染方案 SSR（Server Side Rendering）**，可以让 Vue 应用在服务器端进行渲染，从而提高页面的加载速度和 SEO。

Nuxt.js 服务器渲染的工作原理，包括：

- 服务端渲染：Nuxt.js 在服务器端执行 Vue 组件的渲染过程，并生成初始 HTML。
- 客户端激活：一旦初始 HTML 被发送到浏览器，Vue.js 会接管页面，并在客户端激活成一个交互式应用程序。

在使用 Nuxt3 进行开发时，需要注意以下基本概念：

- SEO 优化
- 基于文件的路由
- 自动导入
- 组件
- 服务器
- 数据获取

## 演示环境

- **电脑** - Windows 10
- **Node.js** - v16.15.0
- **Npm** - 9.4.0
- **Nuxt** - 3.6.5

## 初始化项目

[Nuxt3 官网](https://nuxt.com/)

### 下载命令

```sh
npx nuxi init <project-name>
```

其中 `<project-name>` 换成自己的项目名称。

**下载问题**

由于大陆访问受限，所以下载可能会失败。

解决方案参考：**修改 host 文件**

**Windows 系统**

```sh
C:\Windows\System32\drivers\etc

# 增加以下代码
185.199.108.133 raw.githubusercontent.com
```

映射关系为访问 `raw.githubusercontent.com` 映射到 IP 地址 `185.199.108.133`。

注意：其中的 # 表示注释，映射关系行首不能有 # ，否者不生效。

**Mac 系统**

参考链接：

- [Windows 修改 hosts](https://zhuanlan.zhihu.com/p/563171304)
- [Mac 修改 hosts](https://zhuanlan.zhihu.com/p/461884595)
- [手动下载地址](https://github.com/nuxt/starter/tree/v3)

### 运行项目

1. 进入项目目录，并安装项目依赖 `npm install`。
2. 启动项目，`npm run dev`。
3. ✨ 浏览器访问 [http://localhost:3000](http://127.0.0.1:3000/)

### 服务端渲染

**SPA 和 SSR 是什么**

- SPA（Single Page Application）单页面应用，在**客户端**通过 JS 动态地构建页面。
- SSR（Server-Side Rendering）服务器端渲染，在**服务器端**生成 HTML 页面并发送给客户端。

**有什么不同？**

- SPA 的特点是页面切换流畅，动态渲染变化的部分，**用户体验好**，但是对搜索引擎的支持不够友好。
- SSR 的特点是对搜索引擎友好，可以提高页面**首次加载速度** 和 **SEO**，但是页面切换可能不够流畅，因为每次都是请求一个完整的 HTML 页面。

**Nuxt 框架优势**

- Nuxt 采用了**混合的架构模式**，可以同时支持 SSR 和 SPA。

- 在 Nuxt 中，首次访问页面是 SSR 方式，也就是在服务器端生成 HTML 页面并发送给客户端，但后续的页面切换则使用 SPA 的方式进行，从而兼顾了 SSR 和 SPA 的优点。

**适用场景**

企业网站、商品展示 等 C 端网站，对 SEO 搜索更友好，且页面切换流畅，用户体验更好。

## 路由案例

### 目录结构

我们先来认识 Nuxt 项目的目录结构。

```sh
├─.nuxt              非工程代码，存放运行或发行的编译结果
├─node_modules       项目依赖
├─public             网站资源目录
├─server             接口目录
├─.gitignore         git 忽略文件
├─.npmrc             npm 配置文件
├─app.vue            根组件
├─nuxt.config.ts     nuxt 配置文件
├─package.json       项目配置文件
├─README.md          项目说明文件
└─tsconfig.json      ts 配置文件
```

### 案例练习

nuxt 有一些**约定的目录**，有特殊功能，如 **pages** 目录的 vue 文件会自动注册路由。

```sh
├─ pages             页面目录，自动注册路由
```

Nuxt.js 自带路由功能，不需要额外安装和配置，无需安装 **vue-router** 。

**参考目录**

```sh
├─ pages                   页面目录，自动注册路由
│  └─home/index.vue       主页
│  └─video/index.vue      视频页
├─app.vue                  根组件
```

**参考代码**

```vue {3-4,6}
<template>
  <!-- 路由链接 -->
  <NuxtLink to="/home">首页</NuxtLink>
  <NuxtLink to="/video">视频页</NuxtLink>
  <!-- 页面路由 -->
  <NuxtPage />
</template>
```

- `<NuxtPage>` 相当于 `<RouterView>`，页面路由
- `<NuxtLink>` 相当于 `<RouterLink>`，页面跳转

## 项目实战 - Nuxt 版哔哩哔哩

### 项目资料

- [在线体验](https://bilibili.megasu.top/)
- [参考代码](https://gitee.com/Megasu/nuxt-bilibili)

### 项目收获

- 路由系统
- SEO 优化
- Nuxt DevTools
- 组件库 @vant/nuxt 使用
- 移动端 vw 适配
- 组件复用
- 服务端
- 项目打包

## SEO 优化

通过设置网页 title 和 description 等 SEO 优化信息，由服务端渲染。

```vue
<script setup lang="ts">
// SEO 优化
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  description:
    'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
  author: '哔哩哔哩',
})
</script>
```

- [SEO 和 Meta](https://nuxt.com/docs/getting-started/seo-meta#seo-and-meta)

## @vant/nuxt 组件库

- 安装 nuxt 版 vant-ui

```sh
pnpm i @vant/nuxt
```

- 添加配置

```ts {4}
// nuxt.config.ts
export default defineNuxtConfig({
  // 调试工具
  devtools: { enabled: true },
  // 应用模块
  modules: ['@vant/nuxt'],
})
```

- 使用

```vue
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
```

PS： 在 Nuxt 项目中，vant 组件会自动按需导入（需重启）。

## 项目中的 vw 适配

**安装依赖**

```sh
pnpm i postcss-px-to-viewport
```

**添加配置**

```ts {6-12}
// nuxt.config.ts
export default defineNuxtConfig({
  // ...省略
  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
    },
  },
})
```

参考文档：

- [nuxt 配置 - postcss](https://nuxt.com/docs/api/configuration/nuxt-config#postcss)
- [vant 进阶用法 - postcss](https://vant-ui.github.io/vant/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei)

## 路由配置-自动路由

在 pages 目录的 vue 文件会自动注册路由。

### 路由中间件

新建 `middleware` 目录，通过 Nuxt 路由中间件实现路由重定向，包括导航守卫等路由功能。

```ts
// middleware/router.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to)
  console.log('from', from)
})
```

**参考链接**

- [路由中间件](https://nuxt.com/docs/getting-started/routing#route-middleware)
- [导航守卫](https://nuxt.com/docs/api/composables/use-router#navigation-guards)

**修改主题色**

在 app.vue 的样式全局生效。

```vue
<style lang="scss">
/* vant-ui 主题定制 */
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
```

**参考链接**

- [vant 样式变量](https://vant-ui.github.io/vant/#/zh-CN/config-provider#bian-liang-lie-biao)

## 注册页

使用组件，在 Nuxt3 中无需导入。

- van-nav-bar
- van-form
- van-field
- van-button

### 静态结构

register.vue

```vue
<script setup lang="ts">
// 表单数据
const form = reactive({
  username: 'itheima',
  password: '123456',
})

// 表单提交
const onSubmit = async () => {
  //
}
</script>

<template>
  <div class="register-page">
    <!-- 导航栏部分 -->
    <van-nav-bar title="面经注册" />

    <!-- 一旦form表单提交了，就会触发submit，可以在submit事件中
        根据拿到的表单提交信息，发送axios请求
    -->
    <van-form @submit="onSubmit">
      <!-- 输入框组件 -->
      <!-- \w 字母数字_   \d 数字0-9 -->
      <van-field
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' },
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <NuxtLink class="link" to="/login">已注册,去登录</NuxtLink>
  </div>
</template>

<style scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
```

## 请求封装

```sh

```

```ts

```

```vue {2,12-17}

```

**参考链接**

- [utils 目录](https://nuxt.com/docs/guide/directory-structure/utils)

## 登录页

登录页逻辑参考注册页。

### 静态结构

login.vue

```vue
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
  <van-sticky>
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
        src="https://video.pearvideo.com/mp4/third/20230706/cont-1784445-12033417-151259-hd.mp4"
      ></video>
    </van-barrage>
  </van-sticky>
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
  object-fit: contain;
  background-color: #fff;
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
```

## 路由鉴权-导航守卫

Nuxt 有路由中间件，简化了导航守卫的实现。

```ts {10-13}
// 白名单列表，记录无需权限访问的所有页面
const whiteList = ['/login', '/register']

export default defineNuxtRouteMiddleware((to, from) => {
  // 首页重定向
  if (to.path === '/') {
    return navigateTo('/article')
  }
  // 获取 token
  const token = getToken()
  if (!token && !whiteList.includes(to.path)) {
    return navigateTo('/login')
  }
})
```

**参考链接**

- [导航守卫](https://nuxt.com/docs/api/composables/use-router#navigation-guards)

## 视频列表-动态渲染列表

- 通过 useFetch 发送请求 - 推荐

`article.vue`

存储数据

```jsx
<script setup lang="ts">
const list = ref<ArticleItem[]>([])

const pageParams = reactive({
  current: 40,
  sorter: 'weight_desc',
  pageSize: 10,
})

const getList = async () => {
  // 获取数据
  const { data } = await useFetch<any>('/interview/query', {
    baseURL: 'http://interview-api-t.itheima.net/h5/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: pageParams,
  })
  // 列表追加
  list.value.push(...data.value.data.rows)
}

getList()
</script>
```

类型声明

```ts

```

v-for 循环展示

```jsx

```

子组件接收渲染

```vue
<script setup lang="ts">
import type { ArticleItem } from 'types/article'

defineProps<{
  item: ArticleItem
}>()
</script>

<template>
  <van-cell class="article-item" @click="navigateTo(`/detail/${item.id}`)">
    <template #title>
      <div class="head">
        <img :src="item.avatar" alt="" />
        <div class="con">
          <p class="title van-ellipsis">{{ item.stem }}</p>
          <p class="other">{{ item.creator }} | {{ item.createdAt }}</p>
        </div>
      </div>
    </template>
    <template #label>
      <div class="body van-multi-ellipsis--l2" v-html="item.content"></div>
      <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
    </template>
  </van-cell>
</template>

<style lang="less" scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
```

## 首页-分页加载更多

[vant-list 列表](https://vant-contrib.gitee.io/vant/#/zh-CN/list)

```jsx
<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="getList"
>
  <ArticleItemCom v-for="item in list" :key="item.id" :item="item" />
</van-list>
```

加载完成，重置 loading, 累加数据，处理 finished

```jsx
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
```

## 视频详情-动态路由传参

### 跳转路由传参

修改面经详情的目录结构

```jsx
pages/video/index.vue  =>   pages/video/[id].vue

其中 [id].vue  表示动态路由
```

点击跳转 `article.vue`

```jsx
<template>
  <!-- 文章区域 -->
  <van-cell class="article-item" @click="navigateTo(`/detail/${item.id}`)">
    <template #title>
      ...
    </template>
    <template #label>
      ...
    </template>
  </van-cell>
</template>
```

页面中获取参数

```jsx
// 获取页面参数
const { params } = useRoute()
console.log(params)
```

### 静态结构

```jsx
<script setup lang="ts">
//
</script>

<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详情"
    />
    <header class="header">
      <h1>大标题</h1>
      <p>
        2050-04-06 | 300 浏览量 | 222 点赞数
      </p>
      <p>
        <img src="头像" alt="" />
        <span>作者</span>
      </p>
    </header>
    <main class="body">
      <p>我是内容</p>
      <p>我是内容</p>
      <p>我是内容</p>
      <p>我是内容</p>
    </main>
    <div class="opt">
      <van-icon class="active" name="like-o"/>
      <van-icon name="star-o"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>

```

### 代码实现

`detail.vue`

```jsx
<script setup lang="ts">

</script>

<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详细"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 |
        {{ article.likeCount }} 点赞数
      </p>
      <p>
        <img :src="article.avatar" alt="" />
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <div class="opt">
      <van-icon :class="{active:article.likeFlag}" name="like-o"/>
      <van-icon :class="{active:article.collectFlag}" name="star-o"/>
    </div>
  </div>
</template>
```

**类型声明**

```ts
/** * 面经详情 */
export type ArticleDetail = {
  /** 头像 */
  avatar?: string
  /** 浏览量 */
  collectFlag?: number
  /** 面经内容 */
  content?: string
  /** 创建时间 */
  createdAt?: string
  /** 创建人 */
  creator?: string
  /** 主键id */
  id?: string
  /** 点赞量 */
  likeCount?: number
  /** 浏览量 */
  likeFlag?: number
  /** 面经标题 */
  stem?: string
  /** 浏览量 */
  views?: number
}
```

## 页面缓存

没有做页面缓存的话，切换页面时会重新发送请求，用户体验不佳，可通过 keepalive 优化体验。

```vue
<template>
  <!-- keepalive 设置页面缓存 -->
  <NuxtPage :keepalive="{ max: 10 }" />
</template>
```

- [NuxtPage 开启 keepalive](https://nuxt.com/docs/guide/directory-structure/pages#keepalive)
- [keepalive issues](https://github.com/nuxt/nuxt/issues/15214)

## 打包发布

nuxt 脚手架只是开发过程中，协助开发的工具，当真正开发完了 => 脚手架不参与上线

参与上线的是 => 打包后的源代码

打包：

- 语法解析，ts 解析成 js，scss 解析成 css 等
- 代码分割，代码压缩，tree-shaking （树摇）
- ....

打包后，可以生成，浏览器能够直接运行的网页 => 就是需要上线的源码！

### 打包命令

nuxt 脚手架工具已经提供了打包命令，直接使用即可。

```bash
# 生成用于服务器端运行的优化代码
pnpm build

# 生成静态网站，将应用程序预渲染成静态 HTML 文件，无需服务器端渲染
pnpm generate
```

### 部署上线

- 部署公司的服务器
- 部署到第三方平台，如：[vercel (免费)](https://vercel.com)
