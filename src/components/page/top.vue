<template>
	<div>
		<el-row>
			<select-bar/>
		</el-row>
		<el-row>
			<hot-bar/>
		</el-row>
		<el-row>
			<recently/>
		</el-row>
	</div>
</template>
<script>
import selectBar from './select.vue';
import hotBar from './hot.vue';
import recently from './recently.vue';

export default {
  components: {
    selectBar,
    hotBar,
    recently,
  },
};
</script>
