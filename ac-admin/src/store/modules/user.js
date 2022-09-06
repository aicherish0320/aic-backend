import md5 from 'md5'
import { login } from '@/api/sys'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login({ commit }, userinfo) {
      const { username, password } = userinfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((ret) => {
            commit('setToken', ret.data.data.token)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
