<template>
<Slide right>
  <a href="#/Login"><span>로그인</span></a>
  <a href="#/Sign"><span>회원가입</span></a>
</Slide>
</template>

<script>
import Slide from './Slide'

export default {
  name: 'Menu',
  components: {
    Slide
  }
}
</script>
