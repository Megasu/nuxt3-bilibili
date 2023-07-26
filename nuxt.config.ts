// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 应用模块
  modules: ['@vant/nuxt', '@vueuse/nuxt'],
  // 调试工具
  devtools: { enabled: true },
  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
    },
  },
})
