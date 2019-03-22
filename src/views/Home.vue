<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img class="swipe-img" :src="img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src

import { images } from '../data'

export default {
  name: 'home',
  data() {
    return {
      images
    }
  },
  components: {
  }
}
</script>
<style scoped>
.swipe-img {
  width: 100%;
}
</style>

