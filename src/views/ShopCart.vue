<template>
  <div class="list">
    <h1>我的购物车</h1>
    <ul>
      <li v-for="(s,index) in shopCart" :key="index">
        {{index}}{{s.quantity}}
        id:{{s.product._id}}
        价格：{{s.product.price}}
       <span @click="countcut(index)">-</span>数量：{{s.quantity}}<span @click="countadd(index)">+</span>
       总价格：{{a(index)}}
        <img :src="'https://api.cat-shop.penkuoer.com'+s.product.coverImg">
        </li>
    </ul>
    <router-link :to="{ name: 'Home' }">【首页】</router-link>
    <router-link :to="{ name: 'Detail', params: { id: 1 } }">【详情】</router-link>
    <router-link :to="{ name: 'UserCenter' }">【个人中心】</router-link>
  </div>
</template>
<script>
import { getShopCart } from '../services/users'
import { constants, copyFile } from 'fs';
import {get} from 'axios'

export default {
  data() {
    return {
      shopCart: [],
      count:1,
    }
  },
  created() {
    this.shopCart = getShopCart()
    get('https://api.cat-shop.penkuoer.com/api/v1/products')
      .then(res=>{
        //console.log(res)
        this.products =res.data.products
      })
      .catch(err=>{
        console.log(err)
      })

  },
  methods:{
    countadd(index){
      // console.log(index)
      // console.log(this.shopCart[index].product._id)
      // console.log(this.shopCart[index])
      // var str=this.shopCart[index].product._id
      //  str=str.substr(str.length-1,1)
       
      //  var d=(str-0)
      this.shopCart[index].quantity+=1
     

    },
    countcut(index){
      // console.log(index)
      // console.log(this.shopCart[index].product._id)
      
      this.shopCart[index].quantity-=1
      if(this.shopCart[index].quantity<0){
        this.shopCart[index].quantity=0
      }
    },
    a(index){
        return Number(this.shopCart[index].product.price)*this.shopCart[index].quantity
    },
    huoqu(){
      get('https://api.cat-shop.penkuoer.com/api/v1/products')
      .then(res=>{
        console.log(res)
        this.products =res.data.products
      })
      .catch(err=>{
        console.log(err)
      })

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
