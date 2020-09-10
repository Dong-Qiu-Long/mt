<template>
  <div class="recommend-right">
    <div class="navigation">
      <img src="@/assets/img/tu.jpg" alt />
    </div>
    <div class="recommend-box">
      <p class="title">猜你喜欢</p>
      <a href="#" class="car" v-for="item in 10" :key='item'>
        <img
          src="http://p1.meituan.net/msmerchant/63f9e3f826c67a58eab30f57a5fe00ad121425.jpg@237w_132h_1e_1c"
          alt
        />
        <p class="name">金英顺(半岛店)</p>
        <p class="eav">
          <el-rate v-model="value2" :colors="colors" class="evaluate"></el-rate>1027个评价
        </p>
        <p class="site">太阳城</p>
        <p class="money">
          ¥
          <span class="max">88.0</span>
          <span class="min">起</span>
        </p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: 5,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
};
</script>
<style lang='scss'>
@import "@/assets/css/components/right.scss";
</style>
