<template>
	<el-row class="top">
		<el-col :span='10' class="left">
			<geo/>
		</el-col>
		<el-col :span='14' class="right">
			<my-nav/>
		</el-col>
	</el-row>
</template>
<script>
import geo from './geo.vue';
import MyNav from './nav.vue';

export default {
  components: {
    geo,
    MyNav,
  },
};
</script>
