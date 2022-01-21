<style lang="less" scoped>
.zh_lottery {
  width: 330px;
  background-color: #cc2510;
}
.lottery__row {
  display: flex;
  justify-content: space-between;
}
.lottery__row.right {
  flex-direction: row-reverse;
}
.lottery_item {
  margin-bottom: 10px;
}
.float_left {
  float: left;
}
.float_right {
  float: right;
}
</style>
<template>
  <div class="zh_lottery" :style="cLotteryStyle">
    <div class="lottery__row">
      <lottery-item
        :style="[LotteryItemStyle, itemStyle]"
        :isAct="index === listIndex"
        :itemCurClass="itemCurClass"
        :size="itemSize"
        :image="item.image"
        :class="['lottery_item', 'float_left']"
        v-for="(item, index) in luckyList.slice(0, 3)"
        :key="index"
        :label="item.label"
        :imageSize="lotteryImageSize"
        :unit="unit"
        :vwSize="vwSize"
      ></lottery-item>
    </div>
    <div class="lottery__row right">
      <lottery-item
        :style="[LotteryItemStyle, itemStyle]"
        :isAct="index + 3 === listIndex"
        :itemCurClass="itemCurClass"
        :size="itemSize"
        :image="item.image"
        :class="['lottery_item', 'float_right']"
        v-for="(item, index) in luckyList.slice(3, 4)"
        :key="index + 3"
        :label="item.label"
        :imageSize="lotteryImageSize"
        :unit="unit"
        :vwSize="vwSize"
      ></lottery-item>
      <!-- 按钮 -->
      <lottery-go
        @click.native="onsubmit"
        :style="[LotteryItemStyle, btnStyle]"
        :size="itemSize"
        :unit="unit"
        :vwSize="vwSize"
        :class="['lottery_item', 'float_right', btnClass]"
      ></lottery-go>
      <lottery-item
        :style="[LotteryItemStyle, itemStyle]"
        :isAct="index + 7 === listIndex"
        :itemCurClass="itemCurClass"
        :class="['lottery_item', 'float_right']"
        :image="item.image"
        :size="itemSize"
        v-for="(item, index) in luckyList.slice(-1)"
        :key="index + 7"
        :label="item.label"
        :imageSize="lotteryImageSize"
        :unit="unit"
        :vwSize="vwSize"
      ></lottery-item>
    </div>
    <div class="lottery__row right">
      <lottery-item
        :style="[LotteryItemStyle, itemStyle, { marginBottom: 0 }]"
        :isAct="index + 4 === listIndex"
        :itemCurClass="itemCurClass"
        :class="['lottery_item', 'float_right']"
        :image="item.image"
        :size="itemSize"
        v-for="(item, index) in luckyList.slice(4, 7)"
        :key="index + 4"
        :label="item.label"
        :imageSize="lotteryImageSize"
        :unit="unit"
        :vwSize="vwSize"
      ></lottery-item>
    </div>
  </div>
</template>
<script>
import lotteryItem from "../src/lotteryItem.vue";
import lotteryGo from "../src/lotteryGo.vue";

import mixin from "../mixins/publish.js";

export default {
  name: "LotteryGrid",
  components: {
    lotteryItem,
    lotteryGo,
  },
  mixins: [mixin],
  computed: {
    //补全列表，补全内容：谢谢参与
    luckyList() {
      let list = [];
      if (this.list && this.list.length) {
        list = JSON.parse(JSON.stringify(this.list));
        let len = list.length;
        if (len < 8) {
          for (let i = 0; i < 8 - len; i++) {
            list.push({
              label: "谢谢参与",
              id: i + len + 1,
              index: i + len,
            });
          }
        } else if (len > 8) {
          list.splice(8);
        }
      }
      return list;
    },
    cLotteryStyle() {
      let size = this.width + "px";

      if (this.unit === "rem") {
        size = this.width / 100 + "rem";
      } else if (this.unit === "vw") {
        size = (this.width / this.vwSize) * 100 + "vw";
      }
      let style = {
        width: size,
        // height: size,
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
