import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const AuthedKey = 'Authed'

/**
 * 获取token
 */
export function getToken() {
  return Cookies.get(TokenKey)
}

/**
 * 保存服务器返回的token，登录时如果有token，需要手动调用本函数保存
 * 
 * @param {string} token 服务器返回的token
 */
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

/**
 * 判断是否已经登录
 */
export function isAuthed() {
  let authed = Cookies.get(AuthedKey)
  return (authed !== undefined && authed !== '')
}

/**
 * 设置已经登录，登录时调用
 */
export function setAuthed() {
  return Cookies.set(AuthedKey, 'true')
}

/**
 * 移除已经登录，登出时调用
 */
export function removeAuthed() {
  return Cookies.remove(AuthedKey)
}
