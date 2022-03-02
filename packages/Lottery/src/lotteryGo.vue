<style lang="less">
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
  <div @click="onClick" class="lottery__button lattice__lottery__btn">
    <span v-if="label">{{ label }}</span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
};
</script>
