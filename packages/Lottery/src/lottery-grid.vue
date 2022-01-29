<style lang="less">
@import "./lottery";
.lottery__box--grid {
  display: inline-block;
}
.lottery__row {
  display: flex;
  justify-content: space-between;
}
.lottery__row.right {
  flex-direction: row-reverse;
}
</style>
<template>
  <div class="lottery__box--grid">
    <div :class="boxClass">
      <div class="lottery__row">
        <lottery-item
          :isAct="index === listIndex"
          :itemActClass="itemActClass"
          :image="item.image"
          :class="itemClass"
          v-for="(item, index) in luckyList.slice(0, 3)"
          :key="index"
          :label="item.label"
        ></lottery-item>
      </div>
      <div class="lottery__row right">
        <lottery-item
          :isAct="index + 3 === listIndex"
          :itemActClass="itemActClass"
          :image="item.image"
          :class="itemClass"
          v-for="(item, index) in luckyList.slice(3, 4)"
          :key="index + 3"
          :label="item.label"
        ></lottery-item>
        <!-- 按钮 -->
        <lottery-go
          @click.native="onsubmit"
          :label="btnText"
          :class="btnClass"
        ></lottery-go>
        <lottery-item
          :isAct="index + 7 === listIndex"
          :itemActClass="itemActClass"
          :image="item.image"
          :class="itemClass"
          v-for="(item, index) in luckyList.slice(-1)"
          :key="index + 7"
          :label="item.label"
        ></lottery-item>
      </div>
      <div class="lottery__row right">
        <lottery-item
          :style="[{ marginBottom: 0 }]"
          :isAct="index + 4 === listIndex"
          :class="itemClass"
          :itemActClass="itemActClass"
          :image="item.image"
          v-for="(item, index) in luckyList.slice(4, 7)"
          :key="index + 4"
          :label="item.label"
        ></lottery-item>
      </div>
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
  },
};
</script>
