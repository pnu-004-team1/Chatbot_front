import Vue from 'vue'
import Vuex from 'vuex'
import { chat } from './modules/chat'
import { home } from './modules/home'
import { logState } from './modules/logState'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home, chat, logState
  }
  // strict: debug
  // plugins: debug ? [createLogger()] : []
})
