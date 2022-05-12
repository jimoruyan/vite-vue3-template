import Layout from '@/layout/index.vue'
import RouteView from '@/components/RouteView.vue'
import { t } from '@/hooks/web/usei18n'
const layoutMap = [
  {
    path: 'agriculture',
    name: 'Agriculture',
    component: RouteView,
    meta: { title: t('router.agriculture.agriculture'), icon: 'Expand' },
    redirect: { name: 'AgricultureDataPreview' },
    children: [
      {
        path: 'data-preview',
        name: 'AgricultureDataPreview',
        component: () => import('@/view/agriculture/data-preview/index.vue'),
        meta: { title: t('router.agriculture.dataPreview'), icon: 'User' }
      },
      {
        path: 'data-query',
        name: 'AgricultureDataQuery',
        component: () => import('@/view/agriculture/data-query/index.vue'),
        meta: { title: t('router.agriculture.dataQuery'), icon: 'UserFilled' }
      },
      {
        path: 'data-analysis',
        name: 'AgricultureDataAnalysis',
        component: () => import('@/view/agriculture/data-analysis/index.vue'),
        meta: { title: t('router.agriculture.dataAnalysis'), icon: 'UserFilled' }
      },
      {
        path: 'site-location',
        name: 'AgricultureSiteLocation',
        component: () => import('@/view/agriculture/site-location/index.vue'),
        meta: { title: t('router.agriculture.siteLocation'), icon: 'UserFilled' }
      }
    ]
  },
  {
    path: 'environment',
    name: 'Environment',
    component: RouteView,
    meta: { title: t('router.environment.environment'), icon: 'Expand' },
    redirect: { name: 'EnvironmentDataPreview' },
    children: [
      {
        path: 'data-preview',
        name: 'EnvironmentDataPreview',
        component: () => import('@/view/environment/data-preview/index.vue'),
        meta: { title: t('router.environment.dataPreview'), icon: 'User' }
      },
      {
        path: 'data-query',
        name: 'EnvironmentDataQuery',
        component: () => import('@/view/environment/data-query/index.vue'),
        meta: { title: t('router.environment.dataQuery'), icon: 'UserFilled' }
      },
      {
        path: 'data-analysis',
        name: 'EnvironmentDataAnalysis',
        component: () => import('@/view/environment/data-analysis/index.vue'),
        meta: { title: t('router.environment.dataAnalysis'), icon: 'UserFilled' }
      },
      {
        path: 'site-location',
        name: 'EnvironmentSiteLocation',
        component: () => import('@/view/environment/site-location/index.vue'),
        meta: { title: t('router.environment.siteLocation'), icon: 'UserFilled' }
      }
    ]
  },
  {
    path: 'hydrology',
    name: 'Hydrology',
    component: RouteView,
    meta: { title: t('router.hydrology.hydrology'), icon: 'Expand' },
    redirect: { name: 'BaseInfo' },
    children: [
      {
        path: 'bsse-info',
        name: 'BaseInfo',
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
  {
    path: '/',
    name: 'Layout',
    meta: { title: t('router.home') },
    redirect: { name: 'AgricultureDataPreview' },
    component: Layout,
    children: [...layoutMap]
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: t('router.home'), whiteList: true },
    component: () => import('@/view/home/index.vue')
  },
  {
    path: '/login/:type?',
    name: 'Login',
    meta: { title: t('router.login') },
    component: () => import('@/view/login/Login.vue')
  }
]

export { routes, layoutMap }
