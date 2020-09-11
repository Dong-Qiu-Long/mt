<template>
  <div class="box">
    <div class="left">
      <span>按省份选择:</span>
      <el-select v-model="value1" :value='1' placeholder="省份">
        <el-option
          v-for="(item,i) in city"
          :key="item.provinceCode"
          :label="item.provinceName"
          :value="i"
        >
          <span style="float: left">{{item.provinceName}}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{i}}</span>
        </el-option>
      </el-select>

      <el-select v-model="value2" placeholder="城市">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label='item.name'
          :value='item.id'
        >
          <span style="float: left">{{ item.name }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.pinyin}}</span>
        </el-option>
      </el-select>
    </div>
    <div class="right">
      <span>直接搜索:</span>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :loading="loading"
      >
        <el-option></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import axios from '@/plugins/axios';

export default {
  data() {
    return {
      options: [],
      value: '',
      city: [],
      valuea: '',
      value1: '',
      value2: '',
      list: [],
      loading: true,
    };
  },
  created() {
    axios.get('/api/meituan/city/province.json').then((res) => {
      this.city = res.data;
    });
  },
  watch: {
    value1() {
      this.value2 = '';
      this.options = this.city[this.value1].cityInfoList;
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/page/select.scss";
</style>
