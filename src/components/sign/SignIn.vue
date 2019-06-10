<template>
    <div class="container">
        <BuggerMenu/>
        <!-- BEGIN : chatHeader -->
        <div class="chatHeader">
        <a href="#" class="BackBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
        <div class="headerTitle">
            <!-- <div class="NameIcon">SA</div> -->
            <img class="NameIcon" src="../../common/images/logo.png"/>
            <div class="Txt">
              <div>PNU Chatbot</div>
              <div>무엇이든 물어보세요!</div>
            </div>
        </div>
        </div>
        <!-- END : chatHeader -->
        <!-- BEGIN : SignUpContent -->
        <div class="chatContent">
          <div class="signWrapper">
            <form @submit.prevent="sendPost" class="form-sign">
              <h2 class="form-sign-heading">로그인</h2>
              <input type="text" class="form-control" v-model="user.username" placeholder="Username" required="" autofocus="" />
              <input type="password" class="form-control" v-model="user.password" placeholder="Password" required=""/>
              <button class="loginBtn" type="submit">Login</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
import BuggerMenu from '../menu/BuggerMenu'
import axios from 'axios'

let state

export default {
  name: 'LogIn',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    sendPost: function () {
      axios.post('http://localhost:7000/login', {
        headers: {'Content-type': 'application/json'},
        username: this.user.username,
        password: this.user.password
      })
        .then(response => {
          sessionStorage.setItem('token', response.data.token)
          sessionStorage.setItem('state', 'login')
          state = sessionStorage.getItem('state')
          console.log(state)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  },
  components: {
    BuggerMenu
  }
}
</script>
