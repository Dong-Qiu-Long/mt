<template>
	<div class="search-box">
		<el-row class="search-row">
			<el-col :span="5" class="left">
				<h1>
					<router-link to='/' class="logo"></router-link>
				</h1>
			</el-col>
			<el-col :span="15" class="center">
				<div class="input-box">
					<input type="text"
						placeholder="搜索商家或地点"
						class="input"
						v-model="input"
						@input="blur(true)"
						@focus="blur(true)"
						@blur="blur(false)">
					<el-button class="btn el-icon-search"></el-button>
					<div
						class="header-search-suggest"
						v-show='show'
						>
						<ul>
							<li v-for="item in recommendArr" :key='item'>{{item}}</li>
						</ul>
					</div>
				</div>
				<div class="input-nav">
					<ul>
						<li v-for="item in navArr" :key='item'><router-link to='/'>{{item}}</router-link></li>
					</ul>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      input: '',
      navArr: [],
      recommendArr: [],
    };
  },
  methods: {
    blur(self) {
      if (self) {
        if (this.input.length > 0 && this.recommendArr.length > 0) {
          this.show = true;
        }
      } else {
        setTimeout(() => {
          this.show = false;
        }, 200);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
	@import '@/assets/css/header/searchBar.scss';
</style>
