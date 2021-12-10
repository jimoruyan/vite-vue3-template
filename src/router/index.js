import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { decode } from 'js-base64'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || ''

  const jwt = sessionStorage.getItem('jwt') || ''

  if (to.path === '/login') {
    // 如果是登录状态 跳转到主页
    jwt ? next('/') : next()
  } else {
    if (from.name === 'Login' && !jwt) {
      next(false)
      return false
    }
    if (jwt) {
      if (to.meta.hasOwnProperty('roles')) {
        let roles = to.meta.roles || []
        let { role } = jwt && JSON.parse(decode(jwt))
        roles.includes(role) ? next() : next('/error')
        return false
      }
      next()
      
    } else if (to.meta && to.meta.whiteList) {
      next()
    } else {
      next('/login')

    }
  }
})

export default router
