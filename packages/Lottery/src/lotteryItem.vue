<style lang="less">
.prize__item {
  box-sizing: border-box;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  transition: all 0.1s;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
}
.prize__item__mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 182, 193, 0.6);
}
.prize__item__image {
  width: 60px;
  height: 60px;
}
</style>
<template>
  <div :class="['prize__item', isAct ? itemActClass : '']">
    <img class="prize__item__image" v-if="image" :src="image" alt="" />
    <div v-if="isAct" class="prize__item__mask"></div>
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
    itemActClass: {
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
  },
};
</script>
