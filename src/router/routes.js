import Layout from '@/layout/index.vue'
import RouteView from '@/components/RouteView.vue'

const layoutMap = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: import('@/view/dashboard/index.vue'),
    meta: { title: '仪表盘', icon: 'Expand' }
  },
  {
    path: 'side-menu1',
    name: 'SideMenu1',
    component: RouteView,
    meta: { title: '侧边菜单1', icon: 'Expand' },
    redirect: { name: 'SideMenu1Item1' },
    children: [
      {
        path: 'side-menu1-item1',
        name: 'SideMenu1Item1',
        meta: { title: '菜单1', icon: 'ForkSpoon' },
        component: () => import('@/view/side-menu1/item-menu1/index.vue')
      },
      {
        path: 'side-menu1-item2',
        name: 'SideMenu1Item2',
        meta: { title: '菜单2', icon: 'ForkSpoon' },
        component: () => import('@/view/side-menu1/item-menu2/index.vue')
      },
      {
        path: 'side-menu1-item3',
        name: 'SideMenu1Item3',
        meta: { title: '菜单3', icon: 'ForkSpoon'},
        component: () => import('@/view/side-menu1/item-menu3/index.vue')
      },
      {
        path: 'side-menu1-item4',
        name: 'SideMenu1Item4',
        meta: { title: '菜单4', icon: 'ForkSpoon', roles: ['admin'] },
        component: () => import('@/view/side-menu1/item-menu4/index.vue')
      }
    ]
  },
  {
    path: 'side-menu2',
    name: 'SideMenu2',
    component: RouteView,
    meta: { title: '侧边菜单2', icon: 'Expand' },
    redirect: { name: 'SideMenu2Item1' },
    children: [
      {
        path: 'side-menu2-item1',
        name: 'SideMenu2Item1',
        meta: { title: '菜单1', icon: 'ForkSpoon' },
        component: () => import('@/view/side-menu2/item-menu1/index.vue')
      },
      {
        path: 'side-menu2-item2',
        name: 'SideMenu2Item2',
        meta: { title: '菜单2', icon: 'ForkSpoon' },
        component: () => import('@/view/side-menu2/item-menu2/index.vue')
      },
      {
        path: 'side-menu2-item3',
        name: 'SideMenu2Item3',
        meta: { title: '菜单3', icon: 'ForkSpoon' },
        component: () => import('@/view/side-menu2/item-menu3/index.vue')
      },
      {
        path: 'side-menu2-item4',
        name: 'SideMenu2Item4',
        meta: { title: '菜单4', icon: 'ForkSpoon', roles: ['admin'] },
        component: () => import('@/view/side-menu2/item-menu4/index.vue')
      }
    ]
  }
]

const routes = [
  { path: '/', name: 'Layout', meta: { title: '首页' }, redirect: { name: 'Dashboard' }, component: Layout, children: [...layoutMap] },
  { path: '/test', name: 'Test', meta: { title: '白名单测试', whiteList: true }, component: () => import('@/view/side-menu2/item-menu4/index.vue') },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('@/view/login/Login.vue')
  }
]

export { routes, layoutMap }
