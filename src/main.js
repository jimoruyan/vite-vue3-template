import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import { setupStore } from '@/store'
import '@/assets/css/reset.css'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElIconModules from '@element-plus/icons'
import '@/assets/css/index.less'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { setupI18n } from '@/locales'

console.log(`${import.meta.env.VITE_GLOB_APP_TITLE}  ${buildTime}  ${import.meta.env.MODE}`)

function bootstrap() {
  const app = createApp(App)
  for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      app.component(iconName, ElIconModules[iconName])
    }
  }
  setupStore(app)
  setupI18n(app)
  app.component('SvgIcon', SvgIcon)

  app.use(router).use(ElementPlus, { locale }).mount('#app')
}
bootstrap()
