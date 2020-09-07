<template>
  <div class="eat-box">
    <el-row>
      <top-bar :title="title" />
    </el-row>
    <el-row class="mt">
      <router-link to="/" class="eat-card" v-for='item in 15' :key='item'>
        <div class="eat-img">
          <img
            src="http://p0.meituan.net/dpmerchantpic/b4f08dbd06a9f02c6aed7ab24b09acbd129481.jpg@267w_150h_1e_1c"
            alt
          />
        </div>
        <div class="eat-title">
          <div class="stop">晓寿司（望京soho店）</div>
          <div class="evaluate">
            <el-rate v-model="value2" :colors="colors" class="star"></el-rate>
						<span>100</span>个评价
          </div>
          <div class="site">昌平镇</div>
          <div class="money">¥<span>98</span>起</div>
        </div>
      </router-link>
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
        name: '猜你喜欢',
        color: 'rgb(78,185,284)',
        arr: ['为你甄选最适合的'],
      },
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
};
</script>
<style lang='scss'>
@import '@/assets/css/main/content/eat.scss';
</style>
