import '@/assets/css/reset.css'
import 'element-plus/dist/index.css'
import '@/assets/css/index.less'
import envVariables from '../public/env-variables.js'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App.vue'
import { createApp } from 'vue'
import { setupRouter } from './router/index'
import { setupStore } from '@/store'
import { registerGlobComp } from '@/components/registerGlobComp'
import { setupI18n } from '@/locales'

// 挂载环境变量
window.envVariables = envVariables

// 环境及打包信息
console.log(`${envVariables.title}  ${buildTime}  ${import.meta.env.MODE}`)

function bootstrap() {
  const app = createApp(App)
  // 路由
  setupRouter(app)
  // store
  setupStore(app)
  // 多语言
  setupI18n(app)
  // 全局组件注册
  registerGlobComp(app)
  app.use(ElementPlus, { locale }).mount('#app')
}
bootstrap()
