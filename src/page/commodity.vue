<template>
  <div class="commodity">
		<el-row class="location">
			<span>秦皇岛</span>美团＞秦皇岛<span>1</span>
		</el-row>
		<el-row class="commodity-btm">
			<el-col class="left" :span='19'>
				<left-bar/>
			</el-col>
			<el-col class="right" :span='5'>
				<right-bar/>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import leftBar from '@/components/commodity/left.vue';
import rightBar from '@/components/commodity/right.vue';

export default {
  components: {
    leftBar,
    rightBar,
  },
};
</script>
<style lang="scss" >
header {
  height: 160px !important;
}
main {
  top: 0px !important;
}
.commodity{
	margin-top: 20px;
	margin-bottom: 30px;
}
.location{
	text-align: left;
	margin-bottom: 20px;
	font-size: 12px;
}
</style>
