<style lang="less">
.turntable {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .turntable__table {
    width: 430px;
    height: 430px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: rotate(0deg);
    &.move {
      transition: transform 6s cubic-bezier(0.42, 0, 0.66, 1.09);
    }
  }
  .turntable__btn {
    width: 118px;
    height: 138px;
    position: absolute;
    background-image: url('./images/do_bg.png');
    background-size: 100% 100%;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .turntable__container {
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background: #ffbd72;
    display: flex;
    justify-content: center;
    &.move {
      transition: transform 6s cubic-bezier(0.42, 0, 0.66, 1.09);
    }
    &.even {
      .turntable__blade:nth-child(1){
        background-color: #c57519 !important;
      }
    }
    .turntable__blade:nth-child(odd){
      background-color: #f7c894;
    }
    .turntable__blade:nth-child(even){
      background-color: #ffebd4;
    }
  }
  .turntable__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
  }
  .turntable__blade {
    position: absolute;
    width: 100px;
    height: 50%;
    transform-origin: 50% 100%;
    &.gt2Length {
      clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
      -webkit-clip-path: -webkit-polygon(50% 100%, 0% 0%, 100% 0%);
    }
  }

  .turntable__lights{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }
  .turntable__light{
    position: absolute;
    width: 16px;
    height: 50%;
    transform-origin: 50% 100%;
  }
  .turntable__light__dot{
    position: absolute;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .turntable__light:nth-child(odd) .turntable__light__dot{
    box-shadow: 0 0 7.5px #ff0200;
    background-color: #ff0200;
    animation: lottery_light1 0.75s ease-in-out infinite;
  }
  .turntable__light:nth-child(even) .turntable__light__dot{
    box-shadow: 0 0 7.5px #ffffff;
    background-color: #ffffff;
    animation: lottery_light2 0.75s ease-in-out infinite;
  }
  @keyframes lottery_light1 {
    0%{
      box-shadow: 0 0 7.5px #ff0200;
      background-color: #ff0200;
    }
    10%{
      box-shadow: 0 0 7.5px #ff0200;
      background-color: #ff0200;
    }
    40%{
      box-shadow: 0 0 7.5px #ffffff;
      background-color: #ffffff;
    }
    60%{
      box-shadow: 0 0 7.5px #ffffff;
      background-color: #ffffff;
    }
    90%{
      box-shadow: 0 0 7.5px #ff0200;
      background-color: #ff0200;
    }
    100%{
      box-shadow: 0 0 7.5px #ff0200;
      background-color: #ff0200;
    }
  }
  @keyframes lottery_light2 {
    0%{
      box-shadow: 0 0 7.5px #ffffff;
      background-color: #ffffff;
    }
    10%{
      box-shadow: 0 0 7.5px #ffffff;
      background-color: #ffffff;
    }
    40%{
      box-shadow: 0 0 7.5px #ff0200;
      background-color: #ff0200;
    }
    60%{
      box-shadow: 0 0 7.5px #ff0200;
      background-color: #ff0200;
    }
    90%{
      box-shadow: 0 0 7.5px #ffffff;
      background-color: #ffffff;
    }
    100%{
      box-shadow: 0 0 7.5px #ffffff;
      background-color: #ffffff;
    }
  }

  .turntable__prize__name {
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
    margin-bottom: 4px;
    font-size: 12px;
    text-align: center;
  }
  .turntable__prize__image {
    width: 50%;
    max-width: 64px;
  }
}
</style>

<template>
  <div>
    <div class="turntable">
      <div v-if="tableBg" :class="`turntable__table${drawing ? ' move' : ''}`" :style="{ transform: `rotate(${deg}deg)`, backgroundImage: `url('${tableBg}')`, width: `${width}px`, height: `${width}px` }"></div>
      <div v-else :class="`turntable__container${drawing ? ' move' : ''}${listLength%2===1?' even':''}`" :style="{ transform: `rotate(${deg}deg)`, width: `${width}px`, height: `${width}px` }">
        <div class="turntable__content" :style="{width: `${contentWidth}px`, height: `${contentWidth}px`}">
          <div v-for="v, i in list" :key="i" :style="{transform: `rotateZ(${(i+1) * rotateDeg}deg)`, width: `${fanBladeWidth}px`}" :class="`turntable__blade${listLength > 2 ? ' gt2Length' : ''}`">
            <div class="turntable__prize__name">{{v.label}}</div>
            <img :src="v.image" class="turntable__prize__image" alt="">
          </div>
        </div>
        <div class="turntable__lights">
          <div v-for="v, i in list" :key="i" :style="{transform: `rotateZ(${(i+1) * rotateDeg}deg)`}" class="turntable__light"><div class="turntable__light__dot"></div></div>
        </div>
      </div>
      <div class="turntable__btn" @click="onDraw"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Turntable',
  props: {
    tableBg: {
      type: String,
      default: '',
    },
    list: {
      require: true,
      type: Array,
      default: function() {
        // return [{
        //   id: 1001,
        //   label: '奖品1',
        //   image: '',
        // }, {
        //   id: 1002,
        //   label: '奖品2',
        //   image: '',
        // }, {
        //   id: 1003,
        //   label: '奖品3',
        //   image: '',
        // }, {
        //   id: 1004,
        //   label: '奖品4',
        //   image: '',
        // }, {
        //   id: 1005,
        //   label: '奖品5',
        //   image: '',
        // }, {
        //   id: 1006,
        //   label: '奖品6',
        //   image: '',
        // }]
        return []
      }
    },
    width: {
      type: [Number, String],
      default: 340
    },
    skew: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      drawing: false,
      deg: 0,
      prizeIndex: 0,
      isFirstMove: true,
    }
  },
  computed: {
    listLength() {
      return this.list.length
    },
    rotateDeg() {
      return Number((360/this.listLength).toFixed(2))
    },
    contentWidth() {
      return this.width - 40
    },
    fanBladeWidth() {
      let num = this.listLength            //个数
      let diameter = this.contentWidth      //转盘直径
      
      let width = 0           //扇叶元素宽度
      let deg = 360 / num     //每一叶的旋转角度
      
      width = diameter * Math.tan((deg/2) * Math.PI/180)
      if (this.listLength > 2) {
        return width
        } else {
        return width > diameter ? diameter : width
      }
    }
  },
  mounted() {
    if (this.skew) {
      this.deg = -1 * (Math.floor(this.rotateDeg/2))
    }
  },
  methods: {
    go(index) {
      let prizeIndex = Number(index) + 1

      if (!prizeIndex) {
        console.warn("请传入中奖奖品在奖品列表中的索引")
        return
      }
      if (prizeIndex >= this.listLength) {
        console.warn("奖品索引值大于奖品列表数量，请检查")
        return
      }

      if (this.drawing) return
      this.drawing = true
      // 上一轮转动角度 + 圈数 + (一圈 - (上一轮奖品索引值 - 本轮奖品索引值) * 奖品角度)
      this.deg =
        this.deg + 360 * 6 + (360 - (prizeIndex - this.prizeIndex) * this.rotateDeg)
      if (this.isFirstMove) {
        this.deg += Math.floor(this.rotateDeg / 2)
        this.isFirstMove = false
      }
      this.prizeIndex = prizeIndex
      setTimeout(() => {
        this.drawing = false
        this.$emit('onend', this.list[index])
      }, 6000)
    },
    onDraw() {
      // const prizeIndex = Math.ceil(Math.random() * this.listLength)
      // this.go(prizeIndex)
      this.$emit('onDraw')
    }
  },
}
</script>