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
              <h2 class="form-sign-heading">회원가입</h2>
              <input type="text" class="form-control" v-model="user.username" placeholder="Username" required="" autofocus=""/>
              <input type="password" class="form-control" v-model="user.password" placeholder="Password" required=""/>
              <input type="text" class="form-control" v-model="user.name" placeholder="Name" required=""/>
              <button class="SignBtn" type="submit">Submit</button>
              <button class="SignBtn" type="reset">Reset</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
import BuggerMenu from '../menu/BuggerMenu'

export default {
  name: 'SignUp',
  data () {
    return {
      user: {
        username: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    sendPost: function () {
      axios.post('localhost:7000/member/join.do', {
        username: this.username,
        password: this.password,
        name: this.name
      })
      .then(function(res) {
        console.log(res.data)
      }, function() {
        console.log('failed')
      })
    }
  },
  components: {
    BuggerMenu
  }
}
</script>
