<template>
	<div class="header">
		<el-row class="header-top">
			<topBar/>
		</el-row>
		<el-row class="header-bottom"  shadow="always">
			<searchBar/>
		</el-row>
	</div>
</template>
<script>
import topBar from './topBar.vue';
import searchBar from './searchBar.vue';

export default {
  components: {
    topBar,
    searchBar,
  },
};
</script>
<style lang='scss' scoped>
	@import '@/assets/css/header/topBar.scss';
</style>
