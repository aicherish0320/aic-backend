import md5 from 'md5'
import { login } from '@/api/sys'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userinfo) {
      const { username, password } = userinfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(() => {
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
