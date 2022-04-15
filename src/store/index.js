import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modulesFiles = import.meta.globEager('./modules/*.js')
const modules = {}
for (const path in modulesFiles) {
  // set './modules/app.js' => 'app'
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[moduleName] = modulesFiles[path].default
}

const myPersistedState = createPersistedState({
  key: 'store',
  storage: window.sessionStorage
})

export default createStore({
  modules,
  getters,
  plugins: [myPersistedState]
})
