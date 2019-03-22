<template>
  <div class="list">
    <h1>我是详情页</h1>
    <router-link :to="{ name: 'Home' }">【首页】</router-link>
    <router-link :to="{ name: 'ShopCart' }">【购物车】</router-link>
    <router-link :to="{ name: 'List' }">【列表页】</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>

