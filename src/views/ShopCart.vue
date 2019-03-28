<template>
  <div class="list">
    <h1>我的购物车</h1>
    <ul>
      <li v-for="(s,index) in shopCart" :key="s.product.name">
        id:{{s.product._id}}
        价格：{{s.product.price}}
       <span @click="countcut">-</span>数量：{{count}}<span @click="countadd">+</span>
       总价格：{{a(index)}}
        <img :src="'http://api.cat-shop.penkuoer.com'+s.product.coverImg">
        </li>
    </ul>
    <router-link :to="{ name: 'Home' }">【首页】</router-link>
    <router-link :to="{ name: 'Detail', params: { id: 1 } }">【详情】</router-link>
    <router-link :to="{ name: 'UserCenter' }">【个人中心】</router-link>
  </div>
</template>
<script>
import { getShopCart } from '../services/users'
import { constants } from 'fs';

export default {
  data() {
    return {
      shopCart: [],
      count:1,
      qian:0
    }
  },
  created() {
    this.shopCart = getShopCart()
  },
  methods:{
    countadd(){
      this.count+=1
    },
    countcut(){
      this.count-=1
      
    },
    a(index){
        return Number(this.shopCart[index].product.price)*this.count
    }
  } 
}
</script>

<style scoped>
span{
  width: 100px;
  height: 100px;
}

</style>
