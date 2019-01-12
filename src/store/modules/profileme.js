import userService from '../../services/user.service'

export default {
  namespaced: true,
  state: {
    all: {}
  },
  actions: {
    profileMe ({ commit }) {
      commit('profileMeRequest')

      userService.profileMe()
        .then(
          profile => commit('profileMeSuccess', profile),
          error => commit('profileMeFailure', error)
        )
    }
  },
  mutations: {
    profileMeRequest (state) {
      state.all = { loading: true }
    },
    profileMeSuccess (state, profile) {
      state.all = { items: profile }
    },
    profileMeFailure (state, error) {
      state.all = { error }
    }
  }
}
