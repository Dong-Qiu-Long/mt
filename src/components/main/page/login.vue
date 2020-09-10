<template>
  <div class="box">
    <div class="top">
      <el-avatar :size="55" class="head">
        <img src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" />
      </el-avatar>
      <p>Hi! 你好</p>
      <el-button round class="btn login">
				<a href="/login">登录</a>
			</el-button>
      <el-button round class="btn reg">
				<a href="/register">注册</a>
			</el-button>
    </div>
    <div class="bottom">
			<img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
			<p>美团APP手机版</p>
			<p><span>1元起</span>吃喝玩乐</p>
		</div>
  </div>
</template>
<style lang='scss' scoped>
@import "@/assets/css/main/page/login.scss";
</style>
