<template>
	<div class="box">
		<el-col :span='5'>
      <menu-bar/>
		</el-col>
		<el-col :span='14'>
      <carousel/>
		</el-col>
		<el-col :span='5'>
      <login/>
		</el-col>
	</div>
</template>
<script>
import menuBar from './menu.vue';
import carousel from './carousel.vue';
import login from './login.vue';

export default {
  components: {
    menuBar,
    carousel,
    login,
  },
};
</script>
<style lang='scss' scoped>
@import '@/assets/css/main/page/index.scss';
</style>
