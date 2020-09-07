<template>
  <div class="box">
    <div class="left">
      <span>按省份选择:</span>
      <el-select v-model="value1" placeholder="省份">
        <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>

      <el-select v-model="value2" placeholder="城市">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
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
export default {
  data() {
    return {
      options: [
        {
          value: '1',
          label: '黄金糕',
        },
        {
          value: '2',
          label: '双皮奶',
        },
        {
          value: '3',
          label: '蚵仔煎',
        },
        {
          value: '4',
          label: '龙须面',
        },
        {
          value: '5',
          label: '北京烤鸭',
        },
      ],
      value: '',
      city: [
        {
          value: '1',
          label: '山东',
        },
        {
          value: '2',
          label: '甘肃',
        },
        {
          value: '3',
          label: '江苏',
        },
        {
          value: '4',
          label: '北京',
        },
        {
          value: '5',
          label: '云南',
        },
        {
          value: '6',
          label: '海南',
        },
        {
          value: '7',
          label: '浙江',
        },
        {
          value: '8',
          label: '上海',
        },
        {
          value: '9',
          label: '天津',
        },
        {
          value: '10',
          label: '陕西',
        },
        {
          value: '11',
          label: '新疆',
        },
        {
          value: '12',
          label: '贵州',
        },
        {
          value: '13',
          label: '安徽',
        },
        {
          value: '14',
          label: '澳门',
        },
        {
          value: '15',
          label: '湖南',
        },
        {
          value: '16',
          label: '河北',
        },
        {
          value: '17',
          label: '香港',
        },
      ],
      valuea: '',
      value1: '',
      value2: '',
      list: [],
      loading: true,
    };
  },
  watch: {
    value() {
      console.log('变了');
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/page/select.scss";
</style>
