import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    // 注入 token
    if (store.getters.token) {
      // 超时
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }

      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    config.headers.icode = '34785B46B360B444'

    config.headers['Accept-Language'] = store.getters.language

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      // 失败（请求成功，业务失败）
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // token 过期
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/logout')
    }

    ElMessage.error(error.message)
    return Promise.reject(new Error(error))
  }
)

export default service
