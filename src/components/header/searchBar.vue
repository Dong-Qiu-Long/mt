<template>
  <div class="search-box">
    <el-row class="search-row">
      <el-col :span="5" class="left">
        <h1>
          <router-link to="/" class="logo"></router-link>
        </h1>
      </el-col>
      <el-col :span="15" class="center">
        <div class="input-box">
          <input
            type="text"
            placeholder="搜索商家或地点"
            class="input"
            v-model="input"
            @input="blur(true)"
            @focus="blur(true)"
            @blur="blur(false)"
          />
          <el-button class="btn el-icon-search"></el-button>
          <div class="header-search-suggest" v-show="show">
            <ul>
              <li v-for="(item,i) in recommendArr" :key="i" @click='input = item'>{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="input-nav">
          <ul>
            <li v-for="item in navArr" :key="item">
              <router-link to="/">{{item}}</router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from '@/plugins/axios';

export default {
  data() {
    return {
      show: false,
      input: '',
      navArr: [],
      recommendArr: [],
    };
  },
  created() {
    axios.get('/api/meituan/header/searchHotWords.json').then((res) => {
      this.navArr = res.data;
    });
  },
  methods: {
    blur(self) {
      if (self) {
        axios.get('/api/meituan/header/search.json').then((res) => {
          console.log(res);
          this.recommendArr = res.data.list;
        });
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
@import "@/assets/css/header/searchBar.scss";
</style>
