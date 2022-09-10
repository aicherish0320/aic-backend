import store from '@/store'
import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'

const messages = {
  en: {
    msg: {
      ...en
    }
  },
  zh: {
    msg: {
      ...zh
    }
  }
}

function getLanguage() {
  return store?.getters?.language
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
