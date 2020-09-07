<template>
  <div class="location">
    <div class="location-header">美团导航</div>
    <el-row :class="['location-title',{'btm':i == 2}]" v-for="(item,i) in 3" :key='item'>
      <dl>
        <dt>热门城市</dt>
        <div>
          <dd class="hot">
						<a href="#">深圳</a>
					</dd>
					<dd>
						<a href="#">成都</a>
					</dd>
					<dd>
						<a href="#">哈尔滨</a>
					</dd>
					<dd>
						<a href="#">北京</a>
					</dd>
					<dd>
						<a href="#">南宁</a>
					</dd>
					<dd>
						<a href="#">常州</a>
					</dd>
					<dd>
						<a href="#">昆明</a>
					</dd>
					<dd>
						<a href="#">天津</a>
					</dd>
					<dd>
						<a href="#">贵阳</a>
					</dd>
					<dd>
						<a href="#">长沙</a>
					</dd>
					<dd>
						<a href="#">石家庄</a>
					</dd>
					<dd>
						<a href="#">沈阳</a>
					</dd>
					<dd>
						<a href="#">杭州</a>
					</dd>
					<dd>
						<a href="#">南京</a>
					</dd>
        </div>
      </dl>
    </el-row>
  </div>
</template>
<style lang='scss' scoped>
@import "@/assets/css/main/content/location.scss";
</style>/
