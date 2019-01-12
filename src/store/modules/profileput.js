import userService from '../../services/user.service'
// import { router } from '../../router/index'

export const profileput = {
  namespaced: true,
  actions: {
    get ({ dispatch, commit }, { picture, firstname, lastname, email }) {
      userService.profilePut(picture, firstname, lastname, email)
        .then(
          user => {
            // commit('loginSuccess', user)
            // router.push('/dashboard')
          },
          error => {
            commit('loginFailure', error)
            dispatch('alert/error', error, { root: true })
          }
        )
    }
  },
  mutations: {
  }
}
