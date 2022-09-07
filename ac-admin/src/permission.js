import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 1. 用户已登陆，则不允许进入 login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 2. 用户未登录，只允许进入 login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
