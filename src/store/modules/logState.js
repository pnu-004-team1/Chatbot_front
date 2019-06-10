import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const logState = {
  state: {
    sessionState: ''
  },
  getters: {
    getSessionState: (state) => {
      if (state.sessionState === 'login') {
        return 0
      } else {
        return 1
      }
    }
  },
  mutations: {
    setSessionState: (state, input) => {
      state.sessionState = input
    }
  },
  actions: {
  }
}
