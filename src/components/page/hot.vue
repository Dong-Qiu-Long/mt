<template>
	<div class="box">
		<dl>
			<dt>热门城市:</dt>
			<dd v-for='item in arr' :key='item.id'><a href="/">{{item.name}}</a></dd>
		</dl>
	</div>
</template>
<script>
import axios from '@/plugins/axios';

export default {
  data() {
    return {
      arr: [],
    };
  },
  created() {
    axios.get('/api/meituan/city/hot.json').then((res) => {
      this.arr = res.data;
    });
  },
};
</script>
<style lang='scss' scoped>
@import '@/assets/css/page/hot.scss';
</style>
