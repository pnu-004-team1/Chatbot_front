import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    input: '',
    messageID: 0,
    messages: [
      // { id: 0, text: ' 헬루', from: 'bot', date: '10:17' }
    ]
  },
  getters: {
    getInput: (state) => {
      return state.input
    },
    getMessages: (state) => {
      return state.messages
    }
  },
  mutations: {
    updateInput: (state, input) => {
      state.input = input
    },
    addMessage: (state, payload) => {
      const item = {
        id: state.messageID++,
        text: payload,
        from: 'me',
        date: getTimeStamp()
      }
      state.messages.push(item)
      state.input = ''
    }
  },
  actions: {
    sendMessage: ({ state }, payload) => {
      if (payload.charAt(0) === '$') {
        return axios
          .get('http://localhost:7000/bookInfo', {
            params: {query: payload.substring(1, payload.length)}
          })
          .then(res => {
            console.log(res.data)
            const item = {
              id: state.messageID++,
              text: res.data,
              from: 'bot',
              date: getTimeStamp()
            }
            state.messages.push(item)
          })
          .catch(e => {
            console.log(e)
          })
      }
      return axios
        .get('http://localhost:7000/chatbot', {
          params: {query: payload}
        })
        .then(res => {
          console.log(res.data)
          const item = {
            id: state.messageID++,
            text: res.data,
            from: 'bot',
            date: getTimeStamp()
          }
          state.messages.push(item)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
})

function getTimeStamp () {
  var d = new Date()
  var s =
    // leadingZeros(d.getFullYear(), 4) + '.' +
    // leadingZeros(d.getMonth() + 1, 2) + '.' +
    // leadingZeros(d.getDate(), 2) + '.' +
    leadingZeros(d.getHours(), 2) + ':' +
    leadingZeros(d.getMinutes(), 2)

  return s
}

function leadingZeros (n, digits) {
  var zero = ''
  n = n.toString()

  if (n.length < digits) {
    for (let i = 0; i < digits - n.length; i++) {
      zero += '0'
    }
  }
  return zero + n
}
