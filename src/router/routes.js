import Layout from '@/layout/index.vue'
import RouteView from '@/components/RouteView.vue'
import { t } from '@/hooks/web/usei18n'
const layoutMap = [
  {
    path: 'monitoring-page',
    name: 'MonitoringPage',
    component: () => import('@/view/monitoring-page/index.vue'),
    meta: { title: t('router.monitoringPage'), icon: 'Connection' }
  },
  {
    path: 'data-preview',
    name: 'DataPreview',
    component: () => import('@/view/data-preview/index.vue'),
    meta: { title: t('router.dataPreview'), icon: 'User' }
  },
  {
    path: 'data-query',
    name: 'DataQuery',
    component: () => import('@/view/data-query/index.vue'),
    meta: { title: t('router.dataQuery'), icon: 'UserFilled' }
  },
  {
    path: 'data-analysis',
    name: 'DataAnalysis',
    component: () => import('@/view/data-analysis/index.vue'),
    meta: { title: t('router.dataAnalysis'), icon: 'UserFilled' }
  },
  {
    path: 'site-location',
    name: 'SiteLocation',
    component: () => import('@/view/site-location/index.vue'),
    meta: { title: t('router.siteLocation'), icon: 'UserFilled' }
  },
  {
    path: 'hydrology',
    name: 'Hydrology',
    component: () => RouteView,
    meta: { title: t('router.hydrology.hydrology'), icon: 'Expand' },
    redirect: { name: 'SideMenu1Item1' },
    children: [
      {
        path: 'bsse-info',
        name: 'BsseInfo',
        meta: { title: t('router.hydrology.bsseInfo'), icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/bsse-info/index.vue')
      },
      {
        path: 'real-time-data',
        name: 'RealTimeFata',
        meta: { title: t('router.hydrology.realTimeData'), icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/real-time-data/index.vue')
      },
      {
        path: 'consumption-records',
        name: 'ConsumptionRecords',
        meta: { title: t('router.hydrology.consumptionRecords'), icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/consumption-records/index.vue')
      },
      {
        path: 'recharge-record',
        name: 'RechargeRecord',
        meta: { title: t('router.hydrology.rechargeRecord'), icon: 'ForkSpoon' },
        component: () => import('@/view/hydrology/recharge-record/index.vue')
      }
    ]
  }
]

const routes = [
  { path: '/', name: 'Layout', meta: { title: t('router.home') }, redirect: { name: 'MonitoringPage' }, component: Layout, children: [...layoutMap] },
  { path: '/test', name: 'Test', meta: { title: t('router.test'), whiteList: true }, component: () => import('@/view/side-menu2/item-menu4/index.vue') },
  {
    path: '/monitoring-page',
    name: 'MonitoringPage',
    component: () => import('@/view/monitoring-page/index.vue'),
    meta: { title: t('router.monitoringPage'), icon: 'Connection' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: t('router.login') },
    component: () => import('@/view/login/Login.vue')
  }
]

export { routes, layoutMap }
