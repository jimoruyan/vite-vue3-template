// 批量引入英文
const modulesFilesEn = import.meta.globEager('./en/**/*.js')
const modulesEn = {}
for (const path in modulesFilesEn) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modulesEn[moduleName] = modulesFilesEn[path].default
}
// 批量引入中文
const modulesFilesZhCN = import.meta.globEager('./zh-CN/**/*.js')
const modulesZhCN  = {}
for (const path in modulesFilesZhCN) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modulesZhCN[moduleName] = modulesFilesZhCN[path].default
}

export default {
  en: modulesEn,
  zh_CN: modulesZhCN
}
