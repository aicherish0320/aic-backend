import { privateRoute, publicRotes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    // 路由表：初始时
    routes: publicRotes
  }),
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicRotes, ...newRoutes]
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      const routes = []
      menus.forEach((key) => {
        // 权限名 与 路由的 name 匹配
        routes.push(...privateRoute.filter((item) => item.name === key))
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setRoutes', routes)
      return routes
    }
  }
}
