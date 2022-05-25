import { get, post } from '@/utils/axios.js'

export const todos = (params) => get('todos/1', params)
export const posts = (params) => get('posts', params)
