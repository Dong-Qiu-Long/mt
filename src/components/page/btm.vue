<template>
	<div class="btm">
		<div class="box">
		<dl>
			<dt>按拼音首字母选择：</dt>
			<dd v-for="item in letterArr" :key='item'><a href="#">{{item}}</a></dd>
		</dl>
	</div>
	<div class="region">
		<dl v-for="item in letterArr" :key='item'>
			<dt>{{item}}</dt>
			<div>
				<dd><a href="/" class="hot">鞍山</a></dd>
				<dd><a href="/">安阳</a></dd>
				<dd><a href="/">安顺</a></dd>
				<dd><a href="/">安庆</a></dd>
				<dd><a href="/">安康</a></dd>
				<dd><a href="/">安丘</a></dd>
				<dd><a href="/">安岳</a></dd>
				<dd><a href="/">安陆市</a></dd>
				<dd><a href="/">阿克苏</a></dd>
				<dd><a href="/">安州区</a></dd>
				<dd><a href="/">阿图什市</a></dd>
				<dd><a href="/">安琪</a></dd>
				<dd><a href="/">阿拉善盟</a></dd>
				<dd><a href="/">阿荣旗</a></dd>
				<dd><a href="/">安平</a></dd>
				<dd><a href="/">安溪</a></dd>
				<dd><a href="/">安宁</a></dd>
				<dd><a href="/">安华</a></dd>
				<dd><a href="/">阿拉尔</a></dd>
				<dd><a href="/">安福</a></dd>
				<dd><a href="/">阿勒泰市</a></dd>
				<dd><a href="/">阿城区</a></dd>
				<dd><a href="/">澳门</a></dd>
				<dd><a href="/">阿勒泰</a></dd>
				<dd><a href="/">阿里</a></dd>
				<dd><a href="/">阿贝</a></dd>
			</div>
		</dl>
	</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      letterArr: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/page/hot.scss';
@import '@/assets/css/page/btm.scss';
</style>
