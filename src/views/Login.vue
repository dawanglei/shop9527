<template>
  <div class="list">
    <van-cell-group>
      <van-field v-model="userName" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button @click="loginHandle" class="btn-login" type="info" size="large">登录</van-button>
  </div>
</template>
<script>
import { loginIn } from '../utils/auth'

export default {
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    loginHandle() {
      loginIn()
      this.$eventBus.$emit('navToZX', 'UserCenter')
      // this.$router表示路由对象,可以在其上执行路由跳转方法
      //  编程方式实现跳转,通过.push一个路由对象实现
      // 当登录成功之后跳回个人中心
      this.$router.push({
        name: 'UserCenter'
      })
    }
  }
}
</script>
<style>
.btn-login {
  margin: 0.5rem 0;
}
</style>


