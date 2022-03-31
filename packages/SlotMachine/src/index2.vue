<template>
  <div class="slotMachine">
      <div class="slotMachine__ul">
        <div :style="{transform: `translateY(${cTranslateY}%)`}" :class="['slotMachine__li', isMoving ? 'transition' : '']" v-for="(item, index) of cList" :key="index">{{ item.label }}</div>
      </div>
      <!-- <div class="slotMachine__ul">
        <div class="slotMachine__li" v-for="i of 10" :key="i">{{ i }}</div>
        <div class="slotMachine__li" v-for="i of 10" :key="i * 100">{{ i }}</div>
      </div>
      <div class="slotMachine__ul">
        <div class="slotMachine__li" v-for="i of 10" :key="i">{{ i }}</div>
        <div class="slotMachine__li" v-for="i of 10" :key="i * 100">{{ i }}</div>
      </div> -->
    <!-- 按钮 -->
    <div @click="go" class="btn">抽奖</div>
  </div>
</template>
<script>
export default {
  name: 'SlotMachine',
  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            label: '1',
            image: '',
          }, {
            label: '2',
            image: '',
          }, {
            label: '3',
            image: '',
          }, {
            label: '4',
            image: '',
          }, {
            label: '5',
            image: '',
          }, {
            label: '6',
            image: '',
          }, {
            label: '7',
            image: '',
          }, {
            label: '8',
            image: '',
          }, {
            label: '9',
            image: '',
          }, {
            label: '10',
            image: '',
          }
        ]
      }
    }
  },
  data() {
    return {
      isMoving: false,
      stopIndex: 0,
    }
  },
  computed: {
    cList() {
      let _list = this.list;
      if (_list && _list.length > 0) {
        if (_list.length === 30) return _list;
        else if (_list.length > 30) return _list.splice(30);

        while(_list.length < 30) {
          _list = _list.concat(_list)
          if (_list.length >= 30) {
            _list.splice(30)
          }
        }
      }
      return _list || [];
    },
    cTranslateY() {
      if (this.stopIndex === 0) return -2900;

      if (this.isMoving) {
        return -1000 + this.stopIndex * 100;
      }

      return -3000 + this.stopIndex * 100;
    }
  },
  methods: {
    go() {
      const label = '3';
      let index = 0;
      for (index; index < this.list.length; index++) {
        if (this.list[index].label === label) break;
      }

      this.isMoving = true;
      this.stopIndex = this.list.length - index;

      setTimeout(() => {
        this.isMoving = false;
      }, 3000)
    }
  }
}
</script>
<style lang="less">
.slotMachine {
  display: flex;
  width: 300px;
}
.slotMachine__ul {
  flex: 1;
  box-shadow: 0 0 10px #ccc;
  height: 44px;
  overflow: hidden;
}
.slotMachine__li {
  height: 44px;
  line-height: 44px;
  transform: translateY(-2900%);
}
.slotMachine__li.transition {
  transition: transform 3s;
}
</style>