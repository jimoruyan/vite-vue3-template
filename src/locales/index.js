import { createI18n } from 'vue-i18n'
import messages from './lang'
import store from '@/store'

const i18n = createI18n({
  locale: store.getters.lang,
  messages: messages
})
export default i18n
