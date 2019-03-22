<template>
  <div class="list">
    <h1>我的购物车</h1>
    <router-link :to="{ name: 'Home' }">【首页】</router-link>
    <router-link :to="{ name: 'Detail', params: { id: 1 } }">【详情】</router-link>
    <router-link :to="{ name: 'UserCenter' }">【个人中心】</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>

