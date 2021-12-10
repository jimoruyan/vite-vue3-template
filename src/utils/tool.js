/* 处理权限 */
export const hasPermission = (route, role) => {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  }
  return true /* 默认不设权限 */
}

export const filterAsyncRouter = (routerMap, roles) => {
  const accessedRouters = routerMap.filter((route) => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
