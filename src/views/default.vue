<template>
  <el-container>
		<el-header>
			<headerBar/>
		</el-header>
		<el-main>
			<mainBar/>
		</el-main>
		<el-footer>
			<footerBar/>
		</el-footer>
  </el-container>
</template>
<script>
import headerBar from '@/components/header/index.vue';
import footerBar from '@/components/footer/index.vue';
import mainBar from '@/components/main/index.vue';

export default {
  components: {
    headerBar,
  },
};
</script>
<style lang='scss'>
body{
 background: rgb(248, 248, 248);
}
header{
	padding: 0px !important;
	background: #fff;
	height: 197px !important;
	box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10)
}

</style>
