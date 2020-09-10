<template>
	<div class="box">
		<el-row class="sort">
			<ul>
				<li>智能排序</li>
				<li>价格排序<i class="ico">&#xe615;</i></li>
				<li>人气最好</li>
				<li>好评最高</li>
			</ul>
		</el-row>
		<el-row>
			<shop v-for='item in 32' :key='item' class="car-box"/>
		</el-row>
	</div>
</template>
<script>
import shop from './shop.vue';

export default {
  components: {
    shop,
  },
};
</script>
<style lang='scss' scoped>
@import '@/assets/css/components/btm.scss';
</style>
