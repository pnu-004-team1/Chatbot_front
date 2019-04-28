<template>
    <div class="container">
        <!-- BEGIN : chatHeader -->
        <div class="chatHeader">
        <a href="#" class="BackBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
        <BuggerMenu/>
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
            <form action="" method="post" class="form-signin">
              <h2 class="form-signin-heading">로그인</h2>
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

export default {
  name: 'LogIn',
  data () {
    return {}
  },
  components: {
    BuggerMenu
  }
}
</script>

<style>
  .signWrapper {
    margin-top: 10%;
    margin-bottom: 80px;
    font-family:Arial;
  }

  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading{
    margin-left: 10%;
    margin-bottom: 30px;
  }
  .form-signin .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="text"] {
    width:80%;
    margin-left: 10%;
    margin-bottom: 0px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .form-signin input[type="password"] {
    width:80%;
    margin-left: 10%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .loginBtn {
    width: 80%;
    margin-left: 10%;
    box-shadow:inset 0px -3px 7px 0px #29bbff;
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2dabf9), color-stop(1, #0688fa));
    background:-moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
    background:-webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
    background:-o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
    background:-ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
    background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
    background-color:#2dabf9;
    border-radius:3px;
    border:1px solid #0b0e07;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:15px;
    padding:10px 76px;
    /* text-decoration:none;
    text-shadow:0px 1px 0px #263666; */
  }
  .loginBtn:hover {
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0688fa), color-stop(1, #2dabf9));
    background:-moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
    background:-webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
    background:-o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
    background:-ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
    background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
    background-color:#0688fa;
  }
  .loginBtn:active {
    position:relative;
    top:1px;
  }

</style>
