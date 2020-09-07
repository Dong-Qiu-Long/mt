<template>
  <div class="put-box">
    <el-row>
      <top-bar :title="title" />
    </el-row>
    <el-row>
      <div class="bottom">
        <router-link class="minsu-item" to="/" v-for="item in 6" :key="item">
          <img
            src="https://img.meituan.net/phoenix/15a63dee6f7ef9b1426ba0df98d89135266073.jpg@740w_416h_1e_1c"
            alt
            class="product-img"
          />
          <img
            src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
            alt
            class="head-img"
          />
          <p class="name">〈鲸·原宿〉格调轻奢Y1</p>
          <p class="sub-title">
            <span>整套1居室·</span>
            <span>可住2人</span>
            <span>|鼓楼</span>
          </p>
          <p class="prive">
            <span>¥</span>128
          </p>
        </router-link>
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
        name: '推荐民宿',
        color: 'rgba(242,191,71)',
        arr: [
          '天津',
          '济南',
          '大连',
          '太原',
          '石家庄',
          '秦皇岛',
          '呼和浩特',
          '潍坊',
          '唐山',
          '泰安',
        ],
      },
    };
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/main/content/put.scss";
</style>
