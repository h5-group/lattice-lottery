<template>
  <div v-if="list && list.length > 0" class="slotMachine">
    <col-ele v-for="i of colCount" :moveTime="moveTime" :list="list" :concatCount="concatCount" :key="i" ref="col" />
  </div>
</template>
<script>
import ColEle from './col.vue';
class errorData {
  constructor({code, data = null, msg}) {
    console.error(msg);
    this.code = code;
    this.data = data;
    this.msg = msg;
  }
}
export default {
  name: 'SlotMachine',
  components: {
    ColEle
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    // 动画时间 单位秒
    moveTime: {
      type: [String, Number],
      default: 4,
    },
    // 奖品列表复制次数
    concatCount: {
      type: [String, Number],
      default: 3,
    },
    // 滚筒列数
    colCount: {
      type: [String, Number],
      default: 3,
    }
  },
  data() {
    return {
      isMoving: false,
    }
  },
  methods: {
    go(val) {
      if (Object.prototype.toString.call(val) !== '[object Array]') {
        this.$emit('onerror', new errorData({
          code: 1000,
          msg: 'go函数的传参类型应为 Array',
        }));
        return;
      }
      if (val.length !== this.colCount) {
        this.$emit('onerror', new errorData({
          code: 1001,
          data: val,
          msg: `go函数的传参值长度（length：${val.length}） 不等于colCount值（colCount：${this.colCount}）`,
        }));
        return;
      }
      if (this.isMoving) {
        this.$emit('onerror', new errorData({
          code: 1002,
          msg: '重复调用go函数',
        }));
        return;
      };
      this.isMoving = true; 
      const cols = this.$refs.col;
      for (let i = 0; i < cols.length; i++) {
        setTimeout(() => {
          cols[i].go(val[i]);
          if (i === cols.length - 1) {
            setTimeout(() => {
              this.isMoving = false;
              this.$emit('onend', val);
            }, this.moveTime * 1000)
          }
        }, i * 500);
      }
    },
  }
}
</script>
<style lang="less">
.slotMachine {
  display: flex;
  width: 360px;
}
</style>