<template>
  <div class="box">
    <div class="top">
      <el-avatar :size="55" class="head" :class="{'mt':name}">
        <img src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" />
      </el-avatar>
      <p>Hi! 你好{{name}}</p>
      <el-button round class="btn login" v-if="!name">
        <a href="/login">登录</a>
      </el-button>
      <el-button round class="btn reg" v-if="!name">
        <a href="/register">注册</a>
      </el-button>
    </div>
    <div class="bottom">
      <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
      <p>美团APP手机版</p>
      <p>
        <span>1元起</span>吃喝玩乐
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  created() {
    const { cookie } = document;
    const arr = cookie.split('=');
    const name = arr[1];
    this.name = name;
    console.log(this.name);
  },
};
</script>
<style lang='scss' scoped>
.mt {
  margin-top: 70px !important;
}
@import "@/assets/css/main/page/login.scss";
</style>
