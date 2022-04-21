import { defineStore } from 'pinia'
import { LANG_KEY } from '@/store/cache-types.js'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    counter: 0,
    lang: 'zh_CN',
    breadCrumb: []
  }),
  getters: {
    getLang() {
      return this.lang || JSON.parse(localStorage.getItem(LANG_KEY))
    },
    getBreadCrumb() {
      return this.breadCrumb
    }
  },
  actions: {
    setLang(lang) {
      this.lang = lang
      localStorage.setItem(LANG_KEY, lang)
    },
    setBreadCrumb(breadCrumb) {
      this.breadCrumb = breadCrumb
    }
  }
})
