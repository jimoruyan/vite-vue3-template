import SvgIcon from '@/components/SvgIcon/index.vue'
import * as ElIconModules from '@element-plus/icons'

export function registerGlobComp(app) {
  app.component('SvgIcon', SvgIcon)
  for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      app.component(iconName, ElIconModules[iconName])
    }
  }
}
