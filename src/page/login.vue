<template>
  <div class="login-box">
    <el-row>
      <div class="top">
        <a href="/" class="logo"></a>
      </div>
    </el-row>
    <el-row>
      <div class="main">
        <div class="left">
          <img
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt
          />
        </div>
        <div class="right">
          <from>
            <div class="validate-info">
              <i class="ico">&#xe674;</i>
              请输入正确手机号
            </div>
            <div class="login-type">
              <span class="l">账号登录</span>
              <a href="/" class="r">
                手机动态码登录
                <i class="ico">&#xe61c;</i>
              </a>
            </div>
            <div class="input-text">
              <el-input placeholder="手机号" v-model="text" clearable></el-input>
            </div>
            <div class="input-pasword">
              <el-input placeholder="密码" v-model="password" show-password></el-input>
            </div>
            <div class="cf">
              <a href>忘记密码?</a>
            </div>
            <div class="ops">
              <button @click="meg()">登录</button>
            </div>
            <div class="signup-guide">
              <span>还没有账号?</span>
              <a href="/register" class="col">免费注册</a>
            </div>
            <el-divider class="hr">用合作网站账号登录</el-divider>
            <div class="J-oauth-wrapper">
              <i class="ico">&#xe610;</i>
              <i class="ico">&#xe73b;</i>
            </div>
          </from>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="footer">
        <div class="f-top">
          <ul>
            <li>
              <a href="#">关于美团</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">加入我们</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">商家入驻</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">帮助中心</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">美团手机版</a>
            </li>
          </ul>
        </div>
        <div class="btm">
          <a href="#">©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</a>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: '',
      password: '',
    };
  },
  methods: {
    meg() {
      axios
        .get('/api/meituan/login', {
          params: {
            appkey: 'qiulong_1593678868561',
            userName: this.text,
            password: this.password,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 'success') {
            alert(res.msg);
            document.cookie = `name = ${res.data};max-age=50000`;
            this.$router.push('/');
          } else {
            alert(res.msg);
          }
        });
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/login/index.scss";
</style>
