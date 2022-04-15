// src/i18n/index.ts
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'chs', // set locale
  messages: {
    chs: {
      message: {
        hello: '你好世界'
      }
    },
    eng: {
      message: {
        hello: 'hello world'
      }
    }
  }
})

export default i18n
