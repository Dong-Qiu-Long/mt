<template>
	<div class="changeCity">
		<el-row>
			<top-bar/>
		</el-row>
		<el-row>
			<btm-bar/>
		</el-row>
	</div>
</template>
<script>
import topBar from '@/components/page/top.vue';
import btmBar from '@/components/page/btm.vue';

export default {
  components: {
    topBar,
    btmBar,
  },
};
</script>
<style>
	header{
		height: 160px !important;
	}
	main{
		top:0px !important;
	}
	.changeCity{
		margin: 30px 0px;
		padding: 15px;
		width: 100%;
		/* height: 200px; */
		border:1px solid #eee;
		border-radius: 6px;
		background: #fff;
	}
</style>
