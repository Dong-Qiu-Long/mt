<template>
  <div class="register">
    <el-row class="top-row">
      <div class="top">
        <a href="#" class="logo"></a>
        <span class="login">
          已有美团账号？
          <a href="/login">登录</a>
        </span>
      </div>
    </el-row>
    <el-row>
      <div class="main">
        <form>
          <div>
            <label for="mobile">手机号</label>
            <input type="text" v-model.number.trim="mobile" />
            <span>
              <i class="ico">&#xe674;</i>手机号有误
            </span>
          </div>
          <button class="verification">免费获取短信动态码</button>
          <div>
            <label for="mobile">短信动态码</label>
            <input type="text" v-model.number="code" />
            <span>
              <i class="ico">&#xe674;</i>验证码有误
            </span>
          </div>
          <div>
            <label for="mobile">创建密码</label>
            <input type="text" v-model="createPassword" />
            <span>
              <i class="ico">&#xe674;</i>密码有误
            </span>
          </div>
          <div class="strength">
            <span class="a">弱</span>
            <span>中</span>
            <span>强</span>
          </div>
          <div>
            <label for="mobile">确认密码</label>
            <input type="text" v-model="password" />
            <span>
              <i class="ico">&#xe674;</i>两次密码不一致
            </span>
          </div>
          <button class="sub" @click.prevent="sub">同意以下协议并注册</button>
        </form>
        <div class="btm">
          <a href="#">《美团点评用户服务协议》</a>
          <a href="#">《美团点评隐私政策》</a>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="footer">
        <a href="#">©meituan.com 京ICP证070791号 京公网安备11010502025545号</a>
      </div>
    </el-row>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      mobile: '',
      password: '',
      createPassword: '',
      code: '',
    };
  },
  methods: {
    sub() {
      if (this.mobile && this.password && this.code && this.createPassword) {
        console.log(/^[a-z0-9_-]{6,18}$/.test(this.password));

        if (
          !(
            /^[a-z0-9_-]{6,18}$/.test(this.password)
            && /^[a-z0-9_-]{6,18}$/.test(this.createPassword)
          )
        ) {
          alert('密码不符合要求');
          return;
        }
        if (this.password !== this.createPassword) {
          alert('两次密码不一致');
          return;
        }
        if (!/^1[34578]\d{9}$/.test(this.mobile)) {
          alert('手机号不正确');
          return;
        }
        axios
          .get('http://api.duyiedu.com/api/meituan/register', {
            params: {
              appkey: 'qiulong_1593678868561',
              userName: this.mobile,
              password: this.createPassword,
              rePassword: this.password,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 'fail') {
              alert(res.msg);
            } else {
              alert(res.msg);
              this.$router.push('/login');
            }
          });
      } else {
        alert('内容不能为空');
      }
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/register/index.scss";
</style>
