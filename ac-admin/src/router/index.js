import { createRouter, createWebHistory } from 'vue-router'

/**
 * 公开路由表
 */
const publicRotes = [
  {
    path: '/login',
    component: () =>
      import(/*webpackChunkName: 'loginView'*/ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: () =>
      import(/*webpackChunkName: 'layoutView'*/ '@/layout/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: publicRotes
})

export default router
