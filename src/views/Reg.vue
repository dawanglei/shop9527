<template>
  <div class="list">
   <van-cell-group>
      <van-field v-model="userName" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button @click="regHandle" class="btn-login" type="info" size="large">注册</van-button>
  </div>
</template>


<script>


import {post} from 'axios'



export default {
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    regHandle() {
        if (this.username == "" || this.password == "") {
        alert("请输入账号或者密码");
        return;
      }
      post("http://api.cat‒shop.penkuoer.com/api/v1/auth/reg", {
        userName: this.username,
        password: this.password
      }).then(res => {
        if (res.data.code == "success") {
          alert("注册成功");
          console.log(res.data.token);
          this.$router.push("/Login");
        } else {
          alert("用户名已被注册");
        }
        console.log(res);
      });
    }
  }

}
</script>

