import { layoutMap } from '@/router/routes'
import { filterAsyncRouter } from '@/utils/tool'
import { CLEAR_USER, SET_USER, SET_ROUTES } from '../mutation-types'

const user = {
  state: {
    users: null,
    routers: []
  },
  mutations: {
    [CLEAR_USER](state) {
      state.users = null
      state.routers = []
    },
    [SET_USER](state, payload) {
      state.users = payload
    },
    [SET_ROUTES](state, payload) {
      state.routers = payload
    }
  },
  actions: {
    clearUser({ commit }) {
      commit(CLEAR_USER)
    },
    setUser({ commit }, payload) {
      const deepCopy = JSON.parse(JSON.stringify(layoutMap))
      const accessedRouters = filterAsyncRouter(deepCopy, payload.role)
      commit(SET_USER, payload)
      commit(SET_ROUTES, accessedRouters)
    }
  }
}

export default user
