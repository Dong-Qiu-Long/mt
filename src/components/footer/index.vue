<template>
  <div>
    <el-row>
      <top-bar/>
    </el-row>
    <el-row>
      <btm-bar/>
    </el-row>
  </div>
</template>

<script>
import topBar from './top.vue';
import btmBar from './btm.vue';

export default {
  components: {
    topBar,
    btmBar,
  },
};
</script>
