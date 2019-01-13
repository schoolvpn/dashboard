import userService from '../../services/user.service'
import { router } from '../../router'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login ({ dispatch, commit }, { username, password }) {
      commit('loginRequest', { username })

      userService.login(username, password)
        .then(
          user => {
            if (JSON.parse(localStorage.accountinfo).role === "admin") {
              commit('loginSuccess', user)
              router.push('/dashboard')
            }
            else {
              console.log(JSON.parse(localStorage.accountinfo).role)
              commit('loginFailure')
            }
            // commit('loginSuccess', user)
            // router.push('/dashboard')
            // this.$router.push('/dashboard')
          },
          error => {
            commit('loginFailure', error)
            dispatch('alert/error', error, { root: true })
          }
        )
    },
    logout ({ commit }) {
      userService.logout()
      commit('logout')
    }
  },
  mutations: {
    loginRequest (state, user) {
      state.status = { loggingIn: true }
      state.user = user
    },
    loginSuccess (state, user) {
      state.status = { loggedIn: true }
      state.user = user
    },
    loginFailure (state) {
      state.status = {}
      state.user = null
    },
    logout (state) {
      state.status = {}
      state.user = null
    }
  }
}
