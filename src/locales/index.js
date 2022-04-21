import { createI18n } from 'vue-i18n'
import messages from './lang'
import { LANG_KEY } from '@/store/cache-types.js'
const i18n = createI18n({
  locale: localStorage.getItem(LANG_KEY) || 'zh_CN',
  messages: messages
})

export function setupI18n(app) {
  app.use(i18n)
}

export default i18n
