<style lang="less" scoped>
@import "./lottery";
.item {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  background-color: #fad800;
  color: #cc2510;
  font-size: 36px;
}
</style>
<template>
  <div
    :style="style"
    class="item lottery_flex-center lottery_column lottery_shrink lottery_pointer"
  >
    <span v-if="label">{{ label }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 200,
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
  },
};
</script>
