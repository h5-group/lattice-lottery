<style lang="less" scoped>
@import "./lottery";
.lottery__box {
  display: inline-block;
}
.lottery {
  width: 330px;
  padding-left: 10px;
  padding-top: 10px;
  overflow: hidden;
}
.lottery_item {
  margin-right: 10px;
  margin-bottom: 10px;
}
.float_left {
  float: left;
}
.float_right {
  float: right;
}

.lottery_btn {
  width: 100%;
  margin-top: 0.3rem;
}
</style>
<template>
  <div class="lottery__box">
    <div class="lottery" :style="cLotteryStyle">
      <lottery-item
        :style="[LotteryItemStyle, itemStyle]"
        :isAct="index === listIndex"
        :itemCurClass="itemCurClass"
        :size="itemSize"
        :image="item.image"
        :class="['lottery_item', 'float_left']"
        v-for="(item, index) in luckyList"
        :key="index"
        :label="item.label"
        :unit="unit"
        :vwSize="vwSize"
      ></lottery-item>
    </div>
    <div class="lottery_btn lottery_flex-center">
      <!-- 按钮 -->
      <lottery-go
        @click.native="onsubmit"
        :style="[LotteryItemStyle, btnStyle]"
        :size="itemSize"
        :class="['lottery_item', 'float_right', 'lottery_btn-btn', btnClass]"
      ></lottery-go>
    </div>
  </div>
</template>
<script>
import lotteryItem from "./lotteryItem.vue";
import lotteryGo from "./lotteryGo.vue";

import mixin from "../mixins/publish.js";

export default {
  name: "LotteryList",
  components: {
    lotteryItem,
    lotteryGo,
  },
  mixins: [mixin],
  computed: {
    luckyList() {
      let list = [];
      if (this.list && this.list.length) {
        list = JSON.parse(JSON.stringify(this.list));
      } else {
        console.error("????????list???Array");
      }
      return list;
    },
    cLotteryStyle() {
      let pad = this.pad + "px";
      let size = 3 * (this.itemSize + this.pad) + "px";

      if (this.unit === "rem") {
        pad = this.pad / 100 + "rem";
        size = (3 * (this.itemSize + this.pad)) / 100 + "rem";
      } else if (this.unit === "vw") {
        pad = (this.pad / this.vwSize) * 100 + "vw";
        radius = ((3 * (this.itemSize + this.pad)) / this.vwSize) * 100 + "vw";
      }

      let style = {
        paddingLeft: pad,
        paddingTop: pad,
        width: size,
        backgroundColor: this.lotteryBg,
      };
      if (
        Object.prototype.toString.call(this.lotteryStyle) === "[object Object]"
      ) {
        style = Object.assign(style, this.lotteryStyle);
      }
      return style;
    },
  },
};
</script>
