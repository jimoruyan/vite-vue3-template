import { ENV } from '../mutation-types'

const app = {
  state: {
    env: null
  },
  mutations: {
    [ENV](state, payload) {
      state.env = payload
    }
  },
  actions: {
    setEnv({ commit }, payload) {
      commit(ENV, payload)
    }
  }
}

export default app
