<template>
	<div>
		<el-row>
			<!-- 电影 -->
      <fiml />
		</el-row>
		<el-row class="put">
			<!-- 住 -->
			<put/>
		</el-row>
		<el-row class="eat">
			<!-- 吃 -->
			<eat/>
		</el-row>
		<el-row>
			<!-- 导航 -->
			<location/>
		</el-row>
	</div>
</template>
<script>
import fiml from './film.vue';
import put from './put.vue';
import eat from './eat.vue';
import location from './location.vue';

export default {
  components: {
    fiml,
    put,
    eat,
    location,
  },
};
</script>
