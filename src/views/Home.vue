<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" class="banner">
      <van-swipe-item v-for="(img, index) in list" :key="index">
        <img class="swipe-img" :src="serverUrl+img"/>
      </van-swipe-item>
    </van-swipe>

  <div  class="louser"><span icon="volume-o"></span>
    只配送深圳地区，16点之前下单第二天送货，16点之后下单隔天送货
    </div>

    <div>
    <van-row gutter="24" class="liner">
      <van-col span="6" class="liner1">进口水果</van-col>
      <van-col span="6" class="liner1">国产水果</van-col>
      <van-col span="6" class="liner1">干活真菌</van-col>
      <van-col span="6" class="liner1">坚果</van-col>
    </van-row> 
    </div>

    <van-card
      v-for="product in products"
      :num="product.quantity"
      :price="product.price"
      :desc="product.descriptions"  
      :title="product.name"
      :thumb="serverUrl+product.coverImg"
      :key="product._id"
      :thumb-link="`#/list/${product._id}`"
    >
    <div slot="footer">
      <van-button size="mini" @click="addToCartHandle(product)"><van-icon class="btn-cart" name="cart" /></van-button>
    </div>
    </van-card>


    <van-button size="large" @click="loadMore">加载更多</van-button>
    <van-button size="large" @click="loadMore">加载更多</van-button>

  </div>
</template>

<script>
// @ is an alias to /src
(function(){
        /*
         *iphone 6plus
         *原来的尺寸                            414
         *要变成的尺寸（以iPhone 6为基准）375    375
         *比例                                  414/375
         */
        var curWidth = window.screen.width; //iphone 6plus为414px
        var targetWidth = 375;
        var scale = curWidth/targetWidth;
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = 'initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+'';
        document.head.appendChild(meta);
    })()

import { images } from '../data'
import { getProducts } from '../services/products'
import { addToShopCart } from '../services/users'
import { serverUrl } from '../utils/config'

import {get} from 'axios'

export default {
  name: 'home',
  data() {
    return {
      products: [],
      page: 1,
      pageCount: 1,
      serverUrl,
      images,
      list:[]
    }
  },
  components: {
  },
   created() {
    this.loadData()
  },
  methods: {
    addToCartHandle(id) {
      // alert(id)
      addToShopCart(id, 1)
      
      console.log(id)
      this.$eventBus.$emit('addToShopCartEnd');
    },
    loadMore() {
      this.page += 1
      this.loadData()
    },
    loadData() {
      // get(`${serverUrl}/api/v1/products?page=${this.page}`)
      getProducts({ page: this.page })
      .then(res => {
        // console.log(res)
        // 拼接服务器端的数据 使用数组的concat方法实现
        this.products = this.products.concat(res.data.products)
        this.pageCount = res.data.pages
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    
    get('https://api.cat-shop.penkuoer.com/api/v1/products')
      .then(res=>{
        //console.log(res.data.products)
        res.data.products.forEach(element => {
          console.log(element.coverImg)
          this.list.push(element.coverImg)
        });
        this.products =res.data.products
      })
      .catch(err=>{
        console.log(err)
      })

  }
}
</script>

<style scoped>
.swipe-img {
  width: 100%;
}
.banner{
  width: 100%;
 
}
.banner img{
  height:15rem
}
.louser{
    height: 18px;
    font-size: 0.8rem;
    background: #fff;
    padding: 0.3rem;
    
    background: #e2e2e2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

.liner{
  padding-left: 0.3rem;
}
.liner1{
  color: #812812
}
/*.list {
  padding-bottom: 60px;
}
.btn-cart{
  color: deeppink;
  font-size: 1.2rem;
}

*{margin: 0;padding: 0}
  li{list-style: none}
  a{text-decoration: none}
  img{
    border: 0;
    display: block;
  }
  .louser{
    height: auto;
    font-size: 0.8rem;
    background: #fff;
    padding: 0.3rem;
    overflow: hidden;
    position: relative;
    background: #e2e2e2

  }
  .liner{
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: #666;
    font-size: 22px;
  
  } */
  *{
    margin: 0;
    padding: 0;
  }


</style>

