import { defineStore } from 'pinia'
import { filterAsyncRouter } from '@/utils/tool'
import { USER_INFO_KEY, ROUTERS_KEY } from '@/store/cache-types.js'
import { layoutMap } from '@/router/routes'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: null,
    routers: []
  }),
  getters: {
    getUserInfo() {
      return this.userInfo || JSON.parse(localStorage.getItem(USER_INFO_KEY))
    },
    getRouters() {
      return this.routers.length > 0 ? this.routers : JSON.parse(localStorage.getItem(ROUTERS_KEY))
    }
  },
  actions: {
    setUserInfo(info) {
      this.userInfo = info
      const deepCopy = JSON.parse(JSON.stringify(layoutMap))
      const accessedRouters = filterAsyncRouter(deepCopy, info.role)
      this.routers = accessedRouters
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(info))
      localStorage.setItem(ROUTERS_KEY, JSON.stringify(accessedRouters))
    }
  }
})
