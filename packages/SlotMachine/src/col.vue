<template>
  <div class="slotMachine__col">
    <div ref="slotMachine__ul">
      <div v-for="(item, index) of cList" class="slotMachine__li" :key="index">
        <img class="slotMachine__image" v-if="item.image" :src="item.image" alt="">
        <span class="slotMachine__label" v-if="item.label">{{ item.label }}</span>
      </div>
    </div>
    <div ref="slotMachine__li" class="slotMachine__li hide"></div>
  </div>
</template>
<script>
export default {
  name: 'SlotMachineCol',
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
    // 定义奖品列表concat几次
    concatCount: {
      type: [String, Number],
      default: 3
    },
    moveTime: {
      type: [String, Number],
      default: 4,
    }
  },
  data() {
    return {
      isMoving: false,
      translateY: 0,
    }
  },
  computed: {
    cList() {
      const _list = this.list || [];
      let res = [];
      if (_list && _list.length > 0) {
        for (let i = 0; i < this.concatCount; i++) {
          res = res.concat(_list)
        }
      }
      return res;
    },
  },
  mounted() {
    const ulHeight = this.$refs.slotMachine__ul.clientHeight; // 总高度
    const liHeight = this.$refs.slotMachine__li.clientHeight; // 列表子模块高度
    this.$refs.slotMachine__ul.style = `transform: translateY(${-ulHeight + liHeight}px);`;
  },
  methods: {
    go(index) {

      if (this.isMoving) return;
      this.isMoving = true;

      const ulHeight = this.$refs.slotMachine__ul.clientHeight; // 总高度
      const liHeight = this.$refs.slotMachine__li.clientHeight; // 列表子模块高度
      const oneCaseHeight = ulHeight / this.concatCount; // 每一份列表的高度

      const translateY = -oneCaseHeight + ((this.list.length - index) * liHeight); // top 定位到 顶部到 index索引的高度

      const ulMoveStyle = [
        'transition-property: transform',
        `transition-duration: ${this.moveTime}s`,
        'transition-timing-function: ease-in-out',
        `transform: translateY(${translateY}px)`
      ]

      this.$refs.slotMachine__ul.style = ulMoveStyle.join(';');

      setTimeout(() => {
        this.isMoving = false;
        const translateY = -ulHeight + ((this.list.length - index) * liHeight); // top 定位到 底部到 index索引的高度
        this.$refs.slotMachine__ul.style = `transform: translateY(${translateY}px);`;
      }, this.moveTime * 1000)
    },
  }
}
</script>
<style lang="less">
.slotMachine__col {
  flex: 1;
  box-shadow: 0 0 10px #ccc;
  height: 64px;
  overflow: hidden;
}
.slotMachine__li {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.slotMachine__image {
  width: 32px;
  height: 32px;
}
.slotMachine__li.hide {
  visibility: hidden;
}
</style>