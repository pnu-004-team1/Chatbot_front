import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const home = {
  state: {
    chatComponentStatus: ''
  },
  getters: {
    getChatComponentStatus: (state) => {
      return state.chatComponentStatus
    }
  },
  mutations: {
    updateChatComponentStatus: (state, payload) => {
      state.chatComponentStatus = payload
    }
  },
  actions: {
  }
}
