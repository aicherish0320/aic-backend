import md5 from 'md5'
import { login, getUserInfo } from '@/api/sys'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import router, { resetRouter } from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
            commit('setToken', ret.token)
            router.push('/')
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo({ commit }) {
      const ret = await getUserInfo()
      commit('setUserInfo', ret)
      return ret
    },
    logout({ commit }) {
      resetRouter()
      commit('setToken', '')
      commit('setUserInfo', {})
      removeAllItem()
      // TODO：清除掉权限相关配置
      router.push('/login')
    }
  }
}
