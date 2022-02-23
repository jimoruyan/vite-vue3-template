import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import '@/assets/css/reset.css'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import store from './store'
import * as ElIconModules from '@element-plus/icons'
import '@/assets/css/index.less'

const app = createApp(App)

console.log(`${import.meta.env.VITE_GLOB_APP_TITLE}  ${buildTime}  ${import.meta.env.MODE}`)

for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    app.component(iconName, ElIconModules[iconName])
  }
}
app.use(router).use(store).use(ElementPlus, { locale }).mount('#app')
