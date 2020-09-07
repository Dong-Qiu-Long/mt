<template>
  <div class="top" :style="{background:title.color}">
    <dl>
      <dt>{{title.name}}</dt>
      <dd
        v-for="(item,i) in title.arr"
        :key="i"
        :class="{active: i== titleId}"
        @click="titleClick(i)"
      >{{item}}</dd>
    </dl>
    <router-link to="/">
      全部
      <i class="ico">&#xe61d;</i>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: Object,
    },
  },
  data() {
    return {
      titleId: 0,
    };
  },
  methods: {
    titleClick(i) {
      this.titleId = i;
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/main/content/top.scss";
</style>
