<template>
  <div class="list">
    <h1>登录页</h1>
    <router-link :to="{ name: 'Home' }">【首页】</router-link>
    <router-link :to="{ name: 'Reg' }">【注册】</router-link>
    <button @click="loginHandle">登录</button>
  </div>
</template>
<script>
import { loginIn } from '../utils/auth'

export default {
  methods: {
    loginHandle() {
      loginIn()
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

