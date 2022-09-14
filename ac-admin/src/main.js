import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/styles/index.scss'
import installElementPlus from './plugins/element'
import installIcons from '@/icons/index'
import installFilter from '@/filters'
import installDirective from '@/directives'
import './permission'
const app = createApp(App)

installElementPlus(app)
installFilter(app)
installIcons(app)
installDirective(app)

app.use(i18n).use(store).use(router).mount('#app')
