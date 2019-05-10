import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    chat
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
