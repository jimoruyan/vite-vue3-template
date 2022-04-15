import Layout from '@/layout/index.vue'
import RouteView from '@/components/RouteView.vue'

const layoutMap = [
  {
    path: 'monitoring-page',
    name: 'MonitoringPage',
    component: () => import('@/view/monitoring-page/index.vue'),
    meta: { title: '监控首页', icon: 'Connection' }
  },
  {
    path: 'dataPreview',
    name: 'DataPreview',
    component: () => import('@/view/dataPreview/index.vue'),
    meta: { title: '数据预览', icon: 'User' }
  },
  {
    path: 'dataQuery',
    name: 'DataQuery',
    component: () => import('@/view/dataQuery/index.vue'),
    meta: { title: '数据查询', icon: 'UserFilled' }
  },
  {
    path: 'dataAnalysis',
    name: 'DataAnalysis',
    component: () => import('@/view/dataAnalysis/index.vue'),
    meta: { title: '数据分析', icon: 'UserFilled' }
  },
  {
    path: 'siteLocation',
    name: 'SiteLocation',
    component: () => import('@/view/siteLocation/index.vue'),
    meta: { title: '站点位置', icon: 'UserFilled' }
  },
  {
    path: 'hydrology',
    name: 'Hydrology',
    component: () => RouteView,
    meta: { title: '水文', icon: 'Expand' },
    redirect: { name: 'SideMenu1Item1' },
    children: [
      {
        path: 'bsse-info',
        name: 'BsseInfo',
        meta: { title: '基本信息', icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/bsse-info/index.vue')
      },
      {
        path: 'real-time-data',
        name: 'RealTimeFata',
        meta: { title: '实时数据', icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/real-time-data/index.vue')
      },
      {
        path: 'consumption-records',
        name: 'ConsumptionRecords',
        meta: { title: '消费记录', icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/consumption-records/index.vue')
      },
      {
        path: 'recharge-record',
        name: 'RechargeRecord',
        meta: { title: '充值记录', icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/recharge-record/index.vue')
      }
    ]
  }
]

const routes = [
  { path: '/', name: 'Layout', meta: { title: '首页' }, redirect: { name: 'MonitoringPage' }, component: Layout, children: [...layoutMap] },
  { path: '/test', name: 'Test', meta: { title: '白名单测试', whiteList: true }, component: () => import('@/view/side-menu2/item-menu4/index.vue') },
  {
    path: '/monitoring-page',
    name: 'MonitoringPage',
    component: () => import('@/view/monitoring-page/index.vue'),
    meta: { title: '监控首页', icon: 'Connection' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('@/view/login/Login.vue')
  }
]

export { routes, layoutMap }
