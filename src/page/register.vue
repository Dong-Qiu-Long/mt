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
						<input type="text">
						<span><i class="ico">&#xe674;</i>手机号有误</span>
					</div>
					<button class="verification">免费获取短信动态码</button>
					<div>
						<label for="mobile">短信动态码</label>
						<input type="text">
						<span><i class="ico">&#xe674;</i>验证码有误</span>
					</div>
					<div>
						<label for="mobile">创建密码</label>
						<input type="text">
						<span><i class="ico">&#xe674;</i>密码有误</span>
					</div>
					<div class="strength">
						<span class="a">弱</span>
						<span>中</span>
						<span>强</span>
					</div>
					<div>
						<label for="mobile">确认密码</label>
						<input type="text">
						<span><i class="ico">&#xe674;</i>两次密码不一致</span>
					</div>
					<button class="sub">同意以下协议并注册</button>
				</form>
        <div class="btm">
					<a href="#">《美团点评用户服务协议》</a>
					<a href="#">《美团点评隐私政策》</a>
				</div>
      </div>
    </el-row>
    <el-row>
      <div class="footer">
				<a href="#">©meituan.com  京ICP证070791号  京公网安备11010502025545号</a>
			</div>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
@import "@/assets/css/register/index.scss";
</style>
