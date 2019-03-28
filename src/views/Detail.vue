<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item >
        <img :src="'http://api.cat-shop.penkuoer.com'+this.product.coverImg" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{this.product.descriptions}}</div>
        <div class="goods-price">{{this.product.price}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{this.product.price}}</van-col>
        <van-col span="14">剩余：{{this.product.quantity}}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">wgod的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="sorry">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import { getProductDetail } from '../services/products'
import { serverUrl } from '../utils/config'
import { get } from 'axios'

import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      goods: {
        url:"http://api.cat-shop.penkuoer.com",
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      },
      product:{}
    };
  },
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push('cart');
    },
    sorry() {
      Toast('暂无后续逻辑~');
    }
  },
  created() {
    getProductDetail(this.$route.params.id)
      .then(res => {
        this.product = res.data;
        console.log(this.product)
      })
      .catch(err => {

      });
    // get('http://api.cat-shop.penkuoer.com/api/v1/products')
    //   .then(res=>{
    //     console.log(res)
    //     this.products =res.data.products
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })

  }
};
</script>

<style lang="less">

</style>