import { ENV, BREAD_CRUMB } from '../mutation-types'

const app = {
  state: {
    env: null,
    breadCrumb: []
  },
  mutations: {
    [ENV](state, payload) {
      state.env = payload
    },
    [BREAD_CRUMB](state, payload) {
      state.breadCrumb = payload
    }
  },
  actions: {
    setEnv({ commit }, payload) {
      commit(ENV, payload)
    },
    setBreadCrumb({ commit }, payload) {
      commit(BREAD_CRUMB, payload)
    }
  }
}

export default app
