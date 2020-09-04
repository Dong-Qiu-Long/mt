<template>
	<div>
		<el-row class="page">
			<pageBar/>
		</el-row>
		<el-row>内容</el-row>
	</div>
</template>
<script>
import pageBar from './page/index.vue';

export default {
  components: {
    pageBar,
  },
};
</script>
<style lang='scss' scoped>
.page{
	width: 100%;
	height: 475px;
	// border:1px solid #00f;
	>div{
		width: 100%;
		height: 100%;
	}
}
</style>
