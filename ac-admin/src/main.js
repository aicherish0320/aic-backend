import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import installElementPlus from './plugins/element'
import installIcons from '@/icons/index'

const app = createApp(App)

installElementPlus(app)
app.use(installIcons)

app.use(store).use(router).mount('#app')
