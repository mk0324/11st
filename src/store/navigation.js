export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false
  }),
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      })
    }
  },
  actions: {
    onNav ({ commit }) {
      commit('updateState', {
        isShowLNB: true
      })
    },
    offNav ({ commit }) {
      commit('updateState', {
        isShowLNB: false
      })
    }
  }
}