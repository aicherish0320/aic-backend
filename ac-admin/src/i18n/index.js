import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'Hello World'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

const locale = 'zh'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default i18n
