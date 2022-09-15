import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    // 1. 用户已登陆，则不允许进入 login
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在
      if (!store.getters.hasUserInfo) {
        try {
          const { permission } = await store.dispatch('user/getUserInfo')
          // 处理用户权限
          const filterRoutes = await store.dispatch(
            'permission/filterRoutes',
            permission.menus
          )

          // 循环添加动态路由
          filterRoutes.forEach((item) => {
            router.addRoute(item)
          })
          return next(to.path)
        } catch (error) {
          console.error(error.message)
        }
      }
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
