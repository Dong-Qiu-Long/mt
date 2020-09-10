<template>
<div>
  <div class="top-box">
    <el-row>
      <div class="case">
        <span class="one">分类</span>
        <span class="tow">全部</span>
        <div class="classify">
          <ul>
						<li v-for="(item,i) in 10" :key="i">
							<span >美食 <i class="ico">&#xe6b0;</i></span>
							<div class="hover" >
								<dl>
									<dt>美食</dt>
									<dd v-for='item in 20' :key='item'><a href="#">烧烤</a></dd>
								</dl>
							</div>
						</li>
					</ul>
        </div>
      </div>
    </el-row>
		<el-row>
      <div class="case">
        <span class="one">区域</span>
        <span class="tow">全部</span>
        <div class="classify bottom">
          <ul>
						<li v-for="(item,i) in 10" :key="i" >
							<span>美食 <i class="ico">&#xe6b0;</i></span>
							<div class="hover">
								<dl>
									<dt>美食</dt>
									<dd v-for='item in 20' :key='item'><a href="#">烧烤</a></dd>
								</dl>
							</div>
						</li>
					</ul>
        </div>
      </div>
    </el-row>
  </div>
  <div class="btm">
    <btm/>
  </div>
</div>
</template>
<script>
import btm from './lBtm.vue';

export default {
  components: {
    btm,
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/components/left.scss";
</style>
