import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { decode } from 'js-base64'
import { useAppStore } from '@/store/modules/app'
import { useI18n } from '@/hooks/web/usei18n'
const { t } = useI18n()
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
  const appStore = useAppStore()
  document.title = (to.meta && t(to.meta.title)) || ''
  // 设置面包屑
  const breadCrumbList = []
  to.matched.forEach(item => {
    breadCrumbList.push({ name: item.meta.title, path: item.path })
  })
  appStore.setBreadCrumb(breadCrumbList)
  const jwt = sessionStorage.getItem('jwt') || ''

  if (to.path === '/login') {
    // 如果是登录状态 跳转到主页
    jwt ? next('/') : next()
  } else {
    if (to.meta && to.meta.whiteList) {
      next()
    }
    if (from.name === 'Login' && !jwt) {
      next(false)
      return false
    }
    if (jwt) {
      if (Object.prototype.hasOwnProperty.call(to.meta, 'roles')) {
        const roles = to.meta.roles || []
        const { role } = jwt && JSON.parse(decode(jwt))
        roles.includes(role) ? next() : next('/error')
        return false
      }
      next()
    } else {
      next({ path: '/login'})
    }
  }
})

export default router
