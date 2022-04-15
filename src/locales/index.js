// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import messages from './lang'
const i18n = createI18n({
  locale: 'zh_CN',
  messages: messages
})

export default i18n
