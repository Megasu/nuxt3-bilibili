// 路由中间件 - 导航守卫
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to)
  console.log('from', from)
})
