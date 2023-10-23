<style lang="less" scoped>
.mtLottery2 {
  :deep(.prize__item__mask) {
    background-color: rgba(0, 0, 205, 0.6);
    // background-color: transparent;
  }
  :deep(.prize__item__image) {
    width: 100%;
    height: 100%;
  }

  :deep(.lattice__lottery__box) {
    margin: 0 auto;
    width: 560px;
  }
  :deep(.lattice__lottery__item) {
    width: 170px;
    height: 170px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    font-size: 18px;
  }
  :deep(.lattice__lottery__btn) {
    width: 170px;
    height: 170px;
    border: 1px solid #ccc;
    border-radius: 50%;
    &.list {
      margin-top: 30px;
    }
  }
  // :deep(.lattice__lottery__actItem) {
  //   background-color: rebeccapurple;
  //   color: white;
  // }
}

.page {
  padding-bottom: 300px;
}

.box {
  display: inline-block;
}

// 老虎机
.myMachine {
  width: 600px;
  :deep(.slotMachine__col) {
    border: 1px solid blueviolet;
    height: 88px;
  }
  :deep(.slotMachine__li) {
    height: 88px;
  }
  :deep(.slotMachine__image) {
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div class="page">
    <!-- 默认 -->
    <h1>默认</h1>
    <lottery-grid
      ref="mtLottery1"
      @onend="onend"
      :list="list"
      @onsubmit="request('mtLottery1')"
    ></lottery-grid>

    <!-- 配置 -->
    <h1>配置</h1>
    <lottery-grid
      ref="mtLottery2"
      @onend="onend"
      v-bind="lotteryOption"
      :list="list"
      @onsubmit="request('mtLottery2')"
    ></lottery-grid>

    <!-- 自定义样式 -->
    <h1>自定义样式</h1>
    <lottery-grid
      ref="mtLottery3"
      @onend="onend"
      :list="list"
      @onsubmit="request('mtLottery3')"
      class="mtLottery2"
    ></lottery-grid>

    <!-- 按钮在外 -->
    <h1>按钮在外</h1>
    <lottery-list
      ref="mtLottery4"
      @onend="onend"
      :list="list"
      @onsubmit="request('mtLottery4')"
    ></lottery-list>

    <!-- 老虎机 -->
    <h1>老虎机</h1>
    <div class="box">
      <slot-machine
        class="myMachine"
        :colCount="4"
        :moveTime="6"
        :list="list"
        @onend="onMachineEnd"
        @onerror="onMachineError"
        ref="machine"
      />
      <!-- 按钮 -->
      <div @click="machineGo" class="btn">抽奖</div>
    </div>
    
    <!-- 大转盘 -->
    <div>
      <turntable ref="turntable" class="myTurntable" :width="340" :list="list.slice(0, 4)" @onDraw="request('turntable')" @onend="onend" />
    </div>
  </div>
</template>
<script>
import logo from "../assets/logo.png";
export default {
  data() {
    return {
      //注意：list不满8个会自动补全8个，内容：谢谢参与，超过8个会截取前8个
      list: [
        {
          label: "一等奖",
          image: logo,
        },
        {
          label: "二等奖",
        },
        {
          label: "三等奖",
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
          image: logo,
        },
      ],
      lotteryOption: {
        circleTimes: 3, //转圈动画次数 Number 默认：3 单位：次
        velocity: "speed", //抽奖跳动动画：speed:慢-快-慢；invariance:匀速
        btnText: "",
      },
    };
  },
  methods: {
    rndNum(min, max) {
      if (min > max) min = [max, (max = min)][0];
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    request(name) {
      //模拟抽奖请求
      setTimeout(() => {
        let luckyIndex = this.rndNum(0, 7);
        console.log(luckyIndex);
        this.$refs[name].go(luckyIndex);
      }, 100);
    },
    //抽奖动画结束
    onend(data) {
      console.log("抽奖结果回调：", data);
      alert("恭喜您获得：" + data.label);
    },
    // 老虎机
    machineGo() {
      // go函数传入中奖列表的中奖奖品的索引值数组 如 [0,0,0]
      this.$refs.machine.go([0, 0, 0, this.rndNum(0, this.list.length - 1)]);
    },
    onMachineEnd(val) {
      alert(`中奖结果：${val.join(",")}`);
    },
    onMachineError(data) {
      console.log("九宫格动画错误回调：", data);
    },
  },
};
</script>
