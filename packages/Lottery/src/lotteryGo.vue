<style lang="less">
// @import "./lottery";
.lottery__button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  cursor: pointer;
}
</style>
<template>
  <div class="lottery__button">
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
  },
};
</script>
