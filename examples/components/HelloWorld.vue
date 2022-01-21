<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <lottery-grid
      ref="mtLottery1"
      @onend="onend"
      :list="list"
      @onsubmit="request('mtLottery1')"
      class="mtlottery"
    ></lottery-grid>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      //注意：list不满8个会自动补全8个，内容：谢谢参与，超过8个会截取前8个
      list: [
        {
          image: logo,
        },
        {
          label: "二等奖",
        },
        {
          image: logo,
        },
        {
          label: "四等奖",
        },
        {
          label: "五等奖",
        },
        {
          label: "六等奖",
        },
        {
          label: "7等奖",
        },
        {
          label: "8等奖",
        },
        {
          label: "9等奖",
        },
      ],
      lotteryOption: {
        width: 570, //九宫格宽度
        rowMargin: 30, //每行的间隔 默认：4 单位：px
        radius: 8, //每个块的圆角值 默认：8 单位：px
        btnClass: "lottery_btn", //中间抽奖按钮是否是圆形，九宫格grid默认否 false，列表list默认为true
        circleTimes: 3, //转圈动画次数 Number 默认：3 单位：次
        forLucky: false, //是否采用前端随机抽奖，默认否 false （不安全，不建议使用，优先级比onend函数传入的值高）
        size: 170, //每个块的大小，默认：100，单位：px，最小：80
        velocity: "speed", //抽奖跳动动画：speed:慢-快-慢；invariance:匀速
        // lotteryStyle: {             //列表盒子的样式
        //     // backgroundColor: 'transparent',
        //     backgroundColor: '#CC2510',
        // },
        itemStyle: {
          //小块的样式，Object 默认不传
          // backgroundColor: 'transparent',
          backgroundColor: "width",
        },
        itemCurClass: "lottery_act",
        lotteryImageSize: 170,
        unit: "vw",
        vwSize: 750,
        // btnStyle: '',            //中间抽奖按钮的样式，Object 默认不传
      },
      lotteryOption2: {
        unit: "rem",
        itemStyle: {
          //小块的样式，Object 默认不传
          // backgroundColor: 'transparent',
          backgroundColor: "width",
        },
      },
    };
  },
  mounted() {
    Math.rndNum = function (min, max) {
      if (min > max) min = [max, (max = min)][0];
      return this.floor(this.random() * (max - min + 1) + min);
    };
  },
  methods: {
    request(name) {
      //模拟抽奖请求
      setTimeout(() => {
        let luckyIndex = Math.rndNum(0, 7);
        console.log(luckyIndex);
        this.$refs[name].go(luckyIndex);
        this.$refs[name].go(luckyIndex);
      }, 100);
    },
    //抽奖动画结束
    onend(data) {
      console.log("抽奖结果回调：", data);
      alert("恭喜您获得：" + data.label);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
