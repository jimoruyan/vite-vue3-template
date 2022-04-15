import { ENV, BREAD_CRUMB, AISIDE_MENU, LANG } from '../mutation-types'

const app = {
  state: {
    env: null,
    lang: 'zh_CN',
    asideMenu: true,
    breadCrumb: []
  },
  mutations: {
    [ENV](state, payload) {
      state.env = payload
    },
    [BREAD_CRUMB](state, payload) {
      state.breadCrumb = payload
    },
    [AISIDE_MENU](state, payload) {
      state.asideMenu = payload
    },
    [LANG](state, payload) {
      state.lang = payload
    }
  },
  actions: {
    setEnv({ commit }, payload) {
      commit(ENV, payload)
    },
    setBreadCrumb({ commit }, payload) {
      commit(BREAD_CRUMB, payload)
    },
    setAsideMenu({ commit }, payload) {
      commit(AISIDE_MENU, payload)
    },
    setLang({ commit }, payload) {
      commit(LANG, payload)
    }
  }
}

export default app
