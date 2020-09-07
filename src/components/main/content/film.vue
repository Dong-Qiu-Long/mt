<template>
  <div class="fiml-box">
    <el-row>
      <top-bar :title="title" />
    </el-row>
    <el-row>
      <div class="bottom">
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="box">
              <router-link to="/" class="car">
                <img
                  class="bg"
                  src="https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c"
                  alt
                />
                <img
                  class="big"
                  src="http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  alt
                />
                <div class="film-info">
                  <el-row class="film-top">
                    <span class="small">观众评</span>
                    <span class="big">9.2</span>
                  </el-row>
                  <el-row class="film-bottom">
                    <span class="film-name">八佰</span>
                    <span class="buy">购票</span>
                  </el-row>
                </div>
              </router-link>
              <router-link to="/" class="car">
                <img
                  class="bg"
                  src="https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c"
                  alt
                />
                <img
                  class="big"
                  src="http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  alt
                />
                <div class="film-info">
                  <el-row class="film-top">
                    <span class="small">观众评</span>
                    <span class="big">9.2</span>
                  </el-row>
                  <el-row class="film-bottom">
                    <span class="film-name">八佰</span>
                    <span class="buy">购票</span>
                  </el-row>
                </div>
              </router-link>
              <router-link to="/" class="car">
                <img
                  class="bg"
                  src="https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c"
                  alt
                />
                <img
                  class="big"
                  src="http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  alt
                />
                <div class="film-info">
                  <el-row class="film-top">
                    <span class="small">观众评</span>
                    <span class="big">9.2</span>
                  </el-row>
                  <el-row class="film-bottom">
                    <span class="film-name">八佰</span>
                    <span class="buy">购票</span>
                  </el-row>
                </div>
              </router-link>
              <router-link to="/" class="car">
                <img
                  class="bg"
                  src="https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c"
                  alt
                />
                <img
                  class="big"
                  src="http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  alt
                />
                <div class="film-info">
                  <el-row class="film-top">
                    <span class="small">观众评</span>
                    <span class="big">9.2</span>
                  </el-row>
                  <el-row class="film-bottom">
                    <span class="film-name">八佰</span>
                    <span class="buy">购票</span>
                  </el-row>
                </div>
              </router-link>
              <router-link to="/" class="car">
                <img
                  class="bg"
                  src="https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c"
                  alt
                />
                <img
                  class="big"
                  src="http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  alt
                />
                <div class="film-info">
                  <el-row class="film-top">
                    <span class="small">观众评</span>
                    <span class="big">9.2</span>
                  </el-row>
                  <el-row class="film-bottom">
                    <span class="film-name">八佰</span>
                    <span class="buy">购票</span>
                  </el-row>
                </div>
              </router-link>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
  </div>
</template>
<script>
import topBar from './top.vue';

export default {
  components: {
    topBar,
  },
  data() {
    return {
      title: {
        name: '猫眼电影',
        color: 'rgba(251,24,93)',
        arr: ['正在热映', '正在上映'],
      },
    };
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/main/content/fiml.scss";
</style>
