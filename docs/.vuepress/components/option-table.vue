<template>
  <div class="e-table" v-if="list && list.length">
    <div class="e-tr head">
      <div class="e-td">参数</div>
      <div class="e-td">说明</div>
      <div class="e-td">类型</div>
      <div class="e-td">可选值</div>
      <div class="e-td">默认值</div>
    </div>
    <div class="e-tr" v-for="(item, index) in list" :key="index">
      <div class="e-td">{{ item.label }}</div>
      <div class="e-td">{{ item.desc }}</div>
      <div class="e-td">{{ item.type }}</div>
      <div class="e-td">{{ item.values }}</div>
      <div class="e-td">{{ item.default }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
<style lang="less" scoped>
.e-tr {
  display: flex;
  border-bottom: 1px solid #dcdfe6;
  font-size: 16px;
  color: #606266;
  &.head {
    .e-td {
      color: #909399;
    }
  }
}
.e-td {
  flex: 1;
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 12px;
}
</style>
