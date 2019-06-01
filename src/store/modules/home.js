import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const home = {
  state: {
    chatComponentStatus: '',
    containerVisible: false,
    environment: 'pc'
  },
  getters: {
    getChatComponentStatus: (state) => {
      return state.chatComponentStatus
    },
    getContainerVisible: (state) => {
      return state.containerVisible
    },
    getEnvironment: (state) => {
      return state.environment
    }
  },
  mutations: {
    updateChatComponentStatus: (state, payload) => {
      state.chatComponentStatus = payload
    },
    containerDisplay: (state) => {
      state.containerVisible = true
    },
    containerHidden: (state) => {
      state.containerVisible = false
    },
    toggleContainerVisible: (state) => {
      state.containerVisible = !state.containerVisible
    },
    setEnvironment: (state, payload) => {
      state.environment = payload
    }
  },
  actions: {
  }
}
