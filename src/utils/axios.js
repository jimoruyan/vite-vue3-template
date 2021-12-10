import axios from 'axios'

axios.defaults.timeout = 3600000
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    return Promise.reject(error)
  }
)
// get 方法封装
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// post 方法封装
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, { data: data }).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
