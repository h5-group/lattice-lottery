<style lang="less" scoped>
@import "./lottery";
.zh_item {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  background-color: white;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  transition: all 0.1s;
  overflow: hidden;
}
.zh_item_act {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 182, 193, 0.6);
}
.zh_item_image {
  width: 60px;
  height: 60px;
}
</style>
<template>
  <div
    :style="style"
    :class="[
      'zh_item',
      'lottery_flex-center',
      'lottery_column',
      'lottery_shrink',
      isAct ? itemCurClass : '',
    ]"
  >
    <img
      class="zh_item_image"
      :style="itemImageStyle"
      v-if="image"
      :src="image"
      alt=""
    />
    <div v-if="isAct" class="zh_item_act"></div>
    <span v-if="label">{{ label }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    isAct: {
      type: Boolean,
      default: false,
    },
    itemCurClass: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    image: {
      type: String,
    },
    size: {
      type: Number,
      default: 200,
    },
    imageSize: {
      type: Number,
      default: 50,
    },
    unit: {
      type: String,
      default: "px",
    },
    vwSize: {
      type: [String, Number],
      default: 750,
    },
  },
  computed: {
    style() {
      let size = this.size + "px";
      if (this.unit === "rem") size = this.size / 100 + "rem";
      else if (this.unit === "vw")
        size = (this.size / this.vwSize) * 100 + "vw";
      let style = {
        width: size,
        height: size,
      };
      return style;
    },
    itemImageStyle() {
      let size = this.imageSize + "px";
      if (this.unit === "rem") size = this.imageSize / 100 + "rem";
      else if (this.unit === "vw")
        size = (this.size / this.vwSize) * 100 + "vw";

      let style = {
        width: size,
        height: size,
      };
      return style;
    },
  },
};
</script>
