<template>
  <el-row class=".car-box">
    <el-col class="left">
      <p class="num">1</p>
      <div class="img">
        <el-image
          src="http://p1.meituan.net/msmerchant/951ea15d7160e85f2f451f36deac631b7885384.jpg@275w_156h_1e_1c"
          lazy
        ></el-image>
      </div>
    </el-col>
    <el-col :span="17" class="right">
      <div class="right-title">
        <p class="right-name">慕和1%cafe</p>
        <p class="evaluate">
          <el-rate v-model="value"></el-rate>
          <span>不好</span>
          <span>{{value+'分'}}</span>
          <span class="comment">73人评论</span>
        </p>
        <p class="side">
          <span>
            奶茶/果汁|
            <span>青龙</span>
          </span>
          <span>青龙县青龙镇路家乐家对面</span>
          <span class="map">
            <i class="el-icon-location"></i>查看地图
          </span>
        </p>
        <p class="price">
          人均¥
          <span>6</span>
        </p>
      </div>
      <div class="activity">
        <div class="activity-box">
          <a
            href="#"
            v-for="item in newObj[0].self? newObj[0].obj:newObj[0].obj.slice(0,2)"
            :key="item.id"
          >
            <p class="name">
              <span v-html="item.name"></span>
            </p>
            <p class="btm">
              <span class="cPrice">
                <span>¥</span>
                {{item.cPrice}}
              </span>
              <span class="price">门市价¥{{item.price}}</span>
              <span class="soldOut">已售{{item.soldOut}}</span>
            </p>
          </a>
        </div>
        <p @click="newObj[0].self = !newObj[0].self">
          {{newObj[0].self? '收起': '更多'+(newObj[0].obj.length-2)+'个优惠'}}
          <i class="ico">&#xe745;</i>
        </p>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      value: 2,
      newObj: [
        {
          self: false,
          obj: [
            {
              id: 1,
              name: '海鲜大咖<span>1</span>份，包间免费',
              cPrice: '168',
              price: '188',
              soldOut: '288',
            },
            {
              id: 2,
              name: '海鲜大咖<span>2</span>份，包间免费',
              cPrice: '166',
              price: '189',
              soldOut: '299',
            },
            {
              id: 3,
              name: '海鲜大咖<span>1</span>份，包间免费',
              cPrice: '168',
              price: '188',
              soldOut: '288',
            },
            {
              id: 4,
              name: '海鲜大咖<span>1</span>份，包间免费',
              cPrice: '168',
              price: '188',
              soldOut: '288',
            },
            {
              id: 5,
              name: '海鲜大咖<span>1</span>份，包间免费',
              cPrice: '168',
              price: '188',
              soldOut: '288',
            },
            {
              id: 6,
              name: '海鲜大咖<span>1</span>份，包间免费',
              cPrice: '168',
              price: '188',
              soldOut: '288',
            },
          ],
        },
      ],
    };
  },
  methods: {
    map() {
      this.newObj[0].self = true;
      console.log(this.newObj[0].self);
    },
  },
  watch: {
    'newObj.self': function () {
      console.log(this.newObj.self);
    },
  },
};
const arr = [1];
console.log(arr.slice(0, 2));
</script>

<style lang='scss' scoped>
@import "@/assets/css/components/shop.scss";
</style>
