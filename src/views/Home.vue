<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link :to="{ name: 'Home' }">【首页】</router-link>
    <router-link :to="{ name: 'List' }">【列表】</router-link>
    <router-link :to="{ name: 'Login' }">【登录】</router-link>
    <router-link :to="{ name: 'Reg' }">【注册】</router-link>
    <router-link :to="{ name: 'ShopCart' }">【购物车】</router-link>
    <router-link :to="{ name: 'UserCenter' }">【个人中心】</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
