<template>
    <div v-bind:class="bindClass_container">
      <div v-on:click="chatClose">x</div>
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
        <div v-bind:class="bindClass_content">
          <div class="signWrapper">
            <form action="" method="post" class="form-sign">
              <h2 class="form-sign-heading">로그인</h2>
              <input type="text" class="form-control" name="ID" placeholder="Username" required="" autofocus="" />
              <input type="password" class="form-control" name="PW" placeholder="Password" required=""/>
              <button class="loginBtn" type="submit">Login</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
import BuggerMenu from '../menu/BuggerMenu'
import * as str from '../../common/string'

export default {
  name: 'LogIn',
  data () {
    return {}
  },
  computed: {
    bindClass_container () {
      return {
        container_phone: this.getEnvironment === str.PHONE,
        container_pc: this.getEnvironment === str.PC
      }
    },
    bindClass_content () {
      return {
        chatContent_phone: this.getEnvironment === str.PHONE,
        chatContent_pc: this.getEnvironment === str.PC
      }
    }
  },
  components: {
    BuggerMenu
  }
}
</script>
