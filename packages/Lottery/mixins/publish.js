export default {
  data() {
    return {
      listIndex: null,
      luckyIndex: 0,

      baseSpeed: 300,
      minSpeed: 100,
      maxSpeed: 500,
      speed: 20,

      hasCircleTimes: 0,
      hasMoveTimes: 0,

      isMoving: false,
    }
  },
  props: {
    //奖品列表
    list: {
      type: Array,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 320,
    },
    //间隔，最大：20 单位：px
    rowMargin: {
      type: [String, Number],
      default: 10,
    },
    //每个块的圆角值 允许 % 默认单位：px
    radius: {
      type: [String, Number],
      default: 8,
    },
    // 中间按钮是否是圆形
    btnClass: {
      type: String,
      default: '',
    },
    //转圈次数
    circleTimes: {
      type: Number,
      default: 3,
    },
    //是否采用前端随机抽奖-不安全-建议不使用
    forLucky: {
      type: Boolean,
      default: false,
    },
    //每个块的大小 px最小值：100 rem最小值: 160
    size: {
      type: [String, Number],
      default: 100,
    },
    //跳动的动画，默认 慢-快-慢
    velocity: {
      type: [String],
      default: 'speed',
      validator: function (value) {
        return ['invariance', 'speed'].indexOf(value) !== -1
      }
    },
    lotteryStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    //块的样式
    itemStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    itemCurClass: {
      type: String,
      default: ''
    },
    //中间抽奖按钮的样式
    btnStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    lotteryBg: {
      type: String,
      default: '#CC2510'
    },
    lotteryImageSize: {
      type: [String, Number],
      default: 50,
    },
    unit: {
      type: String,
      default: 'px'
    },
    vwSize: {
      type: [String, Number],
      default: 750,
    }
  },

  computed: {
    //间隔值
    pad() {
      return this.rowMargin
    },
    LotteryItemStyle() {

      let mar = this.pad + 'px'
      let radius = isNaN(Number(this.radius)) ? this.radius : this.radius + 'px'

      if (this.unit === 'rem') {
        mar = this.pad / 100 + 'rem'
        radius = isNaN(Number(this.radius)) ? this.radius : this.radius / 100 + 'rem'
      } else if (this.unit === 'vw') {
        mar = this.pad / this.vwSize * 100 + 'vw'
        radius = isNaN(Number(this.radius)) ? this.radius : this.radius / this.vwSize * 100 + 'vw'
      }

      let style = {
        // marginRight: mar,
        marginBottom: mar,
        borderRadius: radius
      }
      return style
    },
    // 每个块的大小
    itemSize() {
      return this.size
    }
  },
  methods: {
    onsubmit() {
      this.$emit('onsubmit')
    },
    go(index) {
      console.log('go')

      if (this.isMoving) {
        console.error('您反复调用了抽奖动画go函数')
        this.$emit('onerror', {
          index: index,
          message: '您反复调用了抽奖动画go函数'
        })
        return
      }

      let luckyIndex;

      luckyIndex = Number(index)

      if (isNaN(luckyIndex)) {
        console.error('go()函数传入值应该为Number类型，请检查')
        this.$emit('onerror', {
          index: index,
          message: 'go()函数传入值应该为Number类型，请检查'
        })
        return
      }

      if (luckyIndex < 0 || luckyIndex >= this.luckyList.length) {
        console.error('go()函数传入值应该为在 [0-' + (this.luckyList.length - 1) + '] 区间内，请检查')
        this.$emit('onerror', {
          index: index,
          message: 'go()函数传入值应该为在 [0-' + (this.luckyList.length - 1) + '] 区间内，请检查'
        })
        return
      }

      this.luckyIndex = luckyIndex //中奖索引
      this.hasCircleTimes = 0 //初始化转圈圈数
      if (this.listIndex === null) this.listIndex = 0
      else this.listIndex += 1 //立即切换到下个位置
      this.$emit('onstart')
      this.start(this.baseSpeed) //开始动画
      this.isMoving = true
    },
    start(speed) {
      //转动计算时间
      if (this.velocity === 'speed') { //非匀速
        if (this.hasMoveTimes < 5) speed -= (this.speed + this.hasMoveTimes * 10)
        else if (this.hasMoveTimes > this.circleTimes * 8 - 7) speed += (this.speed + (this.circleTimes * 8 - this.hasMoveTimes) * 10)
      }
      setTimeout(() => {
        if (this.hasCircleTimes !== -1) { //如果没转完定义好的圈圈次数，继续转圈圈
          if (this.listIndex < this.luckyList.length - 1) {
            this.listIndex += 1
          } else {
            this.listIndex = 0
            this.hasCircleTimes++
          }
          if (this.hasCircleTimes >= this.circleTimes) { //是否转了circleTimes次
            this.hasCircleTimes = -1 //转圈圈结束
          }
          this.hasMoveTimes++ //记录跳动了多少次
          this.start(speed) //递归
        } else { //转圈次数已经达到
          if (this.listIndex < this.luckyIndex) { //如果当前cur位置没到中奖位置，继续跳
            this.listIndex += 1 //跳下一个
            this.hasMoveTimes++ //记录跳动次数
            this.start(speed) //递归
          } else { //cur位置到达中奖位置，停止
            if (this.luckyList[this.luckyIndex]) {
              console.log('恭喜您获得：' + this.luckyList[this.luckyIndex].label)
              this.$emit('onend', this.luckyList[this.luckyIndex])
            } else {
              this.$emit('onerror', {
                index: this.luckyIndex,
                message: 'go函数传入的索引值无法匹配奖品列表'
              })
              this.listIndex = 0
              console.error('错误捕获，luckyIndex：', this.luckyIndex)
            }
            this.hasMoveTimes = 0
            this.isMoving = false
          }
        }
      }, speed);
    },
  },
}