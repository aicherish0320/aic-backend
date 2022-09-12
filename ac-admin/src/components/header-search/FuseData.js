import i18n from '@/i18n'
import path from 'path'

/**
 * 筛选出可供搜索的路由对象
 */
export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  let res = []

  for (const route of routes) {
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle]
    }
    // 当前存在 meta 时，使用 i18n 进行国际化解析，组合成新的 title
    // 动态路由不允许被检索
    const re = /.*\/:.*/
    if (route.meta && route.meta.title && !re.exec(route.path)) {
      const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`)
      data.title = [...data.title, i18nTitle]
      res.push(data)
    }

    // 存在 children
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title)
      if (tempRoutes.length > 0) {
        res = [...res, ...tempRoutes]
      }
    }
  }

  return res
}
