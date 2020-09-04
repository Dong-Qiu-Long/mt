<template>
  <div class="box">
    <el-row class="top">
      <router-link to="/">美团外卖</router-link>
      <router-link to="/">猫眼电影</router-link>
      <router-link to="/">美团酒店</router-link>
      <router-link to="/">民宿 / 公寓</router-link>
      <router-link to="/">商家入驻</router-link>
      <router-link to="/">美团公益</router-link>
    </el-row>
    <el-row class="center">
      <div>
        <div class="left">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item>
              <router-link to="/">
                <img
                  src="http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
                  alt
                />
              </router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to="/">
                <img
                  src="http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"
                  alt
                />
              </router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to="/">
                <img
                  src="http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
                  alt
                />
              </router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to="/">
                <img
                  src="http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
                  alt
                />
              </router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to="/">
                <img
                  src="https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
                  alt
                />
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <router-link to="/"></router-link>
        </div>
      </div>
    </el-row>
    <el-row class="bottom">
			<div class="bottom-link">
				<router-link to="/">
					<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
				</router-link>
			</div>
			<div class="bottom-link">
				<router-link to="/">
					<img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
				</router-link>
			</div>
			<div class="bottom-item">
				<router-link to="/">
					<img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
				</router-link>
			</div>
		</el-row>
  </div>
</template>
<style lang='scss' scoped>
@import "@/assets/css/main/page/carousel.scss";
</style>
