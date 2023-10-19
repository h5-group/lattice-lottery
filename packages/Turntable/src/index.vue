<style lang="less">
.turntable {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
  .turntable__container{
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
  }
  .turntable__content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    // background: #f7c894;
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

  .turntable__container .turntable__blade:nth-child(odd){
    background-color: #f7c894;
  }
  .turntable__container .turntable__blade:nth-child(even){
    background-color: #ffebd4;
  }
  .turntable__container .turntable__blade:nth-child(1){
    background-color: #c57519;
  }
  // .turntable__container .turntable__blade:nth-child(5n){
  //   background-color: #d8a366;
  // }

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
  .turntable__lights .turntable__light:nth-child(odd) .turntable__light__dot{
      box-shadow: 0 0 7.5px #ff0200;
    background-color: #ff0200;
    animation: lottery_light1 0.75s ease-in-out infinite;
  }
  .turntable__lights .turntable__light:nth-child(even) .turntable__light__dot{
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
}
</style>

<template>
  <div>
    <div class="turntable">
      <div class="turntable__btn" @click="doLottery"></div>
      <div :class="`turntable__container${drawing ? ' move' : ''}`" :style="{ transform: `rotate(${deg}deg)`, width: `${width}px`, height: `${width}px` }">
        <div class="turntable__content" :style="{width: `${contentWidth}px`, height: `${contentWidth}px`}">
          <div v-for="v, i in list" :key="i" :style="{transform: `rotateZ(${(i+1) * rotateDeg}deg)`, width: `${fanBladeWidth}px`}" :class="`turntable__blade${listLength > 2 ? ' gt2Length' : ''}`">
            <div class="">{{v.name}}</div>
          </div>
        </div>
        <div class="turntable__lights">
          <div v-for="v, i in list" :key="i" :style="{transform: `rotateZ(${(i+1) * rotateDeg}deg)`}" class="turntable__light"><div class="turntable__light__dot"></div></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Turntable',
  data() {
    return {
      drawing: false,
      deg: 0,
      prizeIndex: 0,
      isFirstClockDoturntable__btn: true,

      width: 640,

      list: [{
        id: 1001,
        index: 1,
        name: '亚运吉祥物玩偶（单个，25cm）',
        image: '',
        desc: '填写邮寄地址，奖品将于次月20日前寄出。图片仅供参考，奖品以实物为准，奖品可在【我的奖品】查看详情。',
        prizeDesc: '价值98元，本奖品为实物奖品随机发出，用户需自行在中奖后至活动结束前，完成寄送地址填写，若未在活动结束前填写收货地址，则视为主动放弃，奖品归还活动主办方。收货地址一经保存，无法修改，对您造成的不便，敬请谅解。*图片仅供参考，奖品以实物为准，奖品将于中奖次月20日之前寄出。',
        showDesc: false,
        note: '',
        isNeedAddr: 1,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }, {
        id: 1002,
        index: 3,
        name: '100分钟超清视频通话体验包',
        image: '',
        desc: '奖品将于72小时内充值到您的中奖手机，仅限当月安卓终端视频通话使用。奖品可在【我的奖品】查看详情。',
        prizeDesc: '本奖品为虚拟物品，奖品将于72小时内充值到用户中奖手机，具体以到账短信为准。仅限当月安卓终端视频通话使用，月底自动失效。',
        showDesc: false,
      }],
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
    this.deg = -1 * (Math.floor(this.rotateDeg/2))
  },
  methods: {
    doLottery() {
      if (this.drawing) return
      this.drawing = true
      const prizeIndex = Math.ceil(Math.random() * (this.listLength - 1))
      console.log(prizeIndex)
      // const prizeIndex = index
      // 上一轮转动角度 + 圈数 + (一圈 - (上一轮奖品索引值 - 本轮奖品索引值) * 奖品角度)
      this.deg =
        this.deg + 360 * 10 + (360 - (prizeIndex - this.prizeIndex) * this.rotateDeg)
      if (this.isFirstClockDoturntable__btn) {
        this.deg += Math.floor(this.rotateDeg / 2)
        this.isFirstClockDoturntable__btn = false
      }
      // this.deg = this.deg + 360 * 6 + (360 - (prizeIndex - (8 - Math.floor((this.deg % 360) / 45))) * 45) - this.deg % 45;
      this.prizeIndex = prizeIndex
      setTimeout(() => {
        this.drawing = false
      }, 6000)
    },
  }
}
</script>