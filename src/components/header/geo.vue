<template>
  <div class="geo-box">
    <span class="el-icon-location"></span>
    <span class="set-city">北京</span>
    <router-link @click="cut" to="/chageCity" class="get-city">切换城市</router-link>
    <div class="small-city">
      [
      <a href>门头沟区</a>
      <a href>大厂回族自治县</a>
      <a href>廊坊</a>
      ]
    </div>
    <div class="l-box">
      <a href class="login">立即登录</a>
      <a href="register">注册</a>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cut() {
      this.$store.state.height = false;
      console.log(this.$store.state.height);
    },
  },
  mounted() {
    console.log(this.$store.state.height);
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/header/geo.scss";
</style>
