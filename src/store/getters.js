const getters = {
  env: state => state.app.env,
  asideMenu: state => state.app.asideMenu,
  users: state => state.user.users,
  lang: state => state.app.lang
}
export default getters
