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
          <form>
            <table align=center border=1 bordercolor=white bordercolorlight=gray cellspacing=0 cellpadding=2>
              <tr>
                <td align=center>아이디</td>
                <td><input type=text name=ID size=12 maxlength=10></td>
              </tr>
              <tr>
                <td align=center>패스워드</td>
                <td><input type=password name=PW size=12 maxlength=12></td>
              </tr>
              <tr>
                <td align=center>이름</td>
                <td><input type=text name=Name size=12 maxlength=10></td>
              </tr>
              <tr>
                <td align=center>이메일</td>
                <td><input type=email name=email size=12 maxlength=10></td>
              </tr>
              <tr>
                <td colspan=2 align=center>
                  <input type=submit value=확인>
                  <input type=reset value=취소>
                </td>
              </tr>
            </table>
          </form>
        </div>
    </div>
</template>

<script>
import BuggerMenu from '../menu/BuggerMenu'

export default {
  name: 'SignUp',
  data () {
    return {}
  },
  components: {
    BuggerMenu
  }
}
</script>
