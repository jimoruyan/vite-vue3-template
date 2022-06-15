import Layout from '@/layout/index.vue'
import RouteView from '@/components/Tool/RouteView.vue'
import { t } from '@/hooks/web/usei18n'
const layoutMap = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('@/view/home/index.vue'),
    meta: { title: t('router.home'), icon: 'HomeFilled' }
  },
  {
    path: 'system-manage',
    name: 'SystemManage',
    component: RouteView,
    meta: { title: t('router.SystemManage.SystemManage'), icon: 'Setting' },
    redirect: { name: 'UserManage' },
    children: [
      {
        path: 'user-manage',
        name: 'UserManage',
        meta: { title: t('router.SystemManage.UserManage'), icon: 'User' },
        component: () => import('@/view/system-manage/user-manage/index.vue')
      },
      {
        path: 'role-manage',
        name: 'RoleManage',
        meta: { title: t('router.SystemManage.RoleManage'), icon: 'Stamp' },
        component: () => import('@/view/system-manage/role-manage/index.vue')
      },
      {
        path: 'menu-manage',
        name: 'MenuManage',
        meta: { title: t('router.SystemManage.MenuManage'), icon: 'Menu' },
        component: () => import('@/view/system-manage/menu-manage/index.vue')
      },
      {
        path: 'log-operation',
        name: 'LogOperation',
        meta: { title: t('router.SystemManage.LogOperation'), icon: 'Document' },
        component: () => import('@/view/system-manage/log-operation/index.vue')
      }
    ]
  }
]

const routes = [
  {
    path: '/',
    name: 'Layout',
    meta: { title: t('router.home') },
    redirect: { name: 'Home' },
    component: Layout,
    children: [...layoutMap]
  },
  {
    path: '/login/:type?',
    name: 'Login',
    meta: { title: t('router.login') },
    component: () => import('@/view/login/Login.vue')
  }
]

export { routes, layoutMap }
