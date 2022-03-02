<style lang="less">
@import "./lottery";
.lottery__box--list {
  display: inline-block;
}
.lottery__list {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.lottery__btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
<template>
  <div class="lottery__box--list">
    <div class="lottery__list lattice__lottery__box">
      <lottery-item
        :isAct="index === listIndex"
        :image="item.image"
        v-for="(item, index) in luckyList"
        :key="index"
        :label="item.label"
        :style="[{ marginBottom: index > 5 ? 0 : false }]"
      ></lottery-item>
    </div>
    <div class="lottery__btn">
      <!-- 按钮 -->
      <lottery-go
        @onClick="onsubmit"
        :label="btnText"
        class="list"
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
        console.error("入参 list 应该为数组");
      }
      return list;
    },
  },
};
</script>
