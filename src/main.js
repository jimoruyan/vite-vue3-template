import { createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import '@/assets/css/reset.css'
import 'element-plus/dist/index.css'
import store from './store'
import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)

console.log(`${import.meta.env.VITE_GLOB_APP_TITLE }  ${buildTime}  ${import.meta.env.MODE}`)

for (let iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    app.component(iconName, ElIconModules[iconName])
  }
}

app.use(router).use(store).use(ElementPlus).mount('#app')
