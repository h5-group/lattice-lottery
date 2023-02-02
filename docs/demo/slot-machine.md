# 老虎机

## 自定义样式

老虎机 slot-machine 组件的奖品列表`list`没有个数要求。

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <slot-machine
      class="myMachine"
      :colCount="4"
      :moveTime="6"
      :list="list"
      @onend="onMachineEnd"
      @onerror="onMachineError"
      ref="machine"
    />
  </div>
  <br />
  <!-- 按钮 -->
  <div style="display: flex; justify-content: center;" @click="machineGo" class="btn">抽奖</div>
</template>

<script>
  export default {
    data() {
      return {
        //注意：list不满8个会自动补全8个，内容：谢谢参与，超过8个会截取前8个
        list: [
          {
            label: "一等奖",
          },
          {
            label: "二等奖",
          },
          {
            label: "三等奖",
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
      };
    },
    methods: {
      rndNum(min, max) {
        if (min > max) min = [max, (max = min)][0];
        return Math.floor(Math.random() * (max - min + 1) + min);
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
  }
</script>

<style>
  /* 宽度大小 */
  .myMachine {
    width: 600px;
  }
  /* 老虎机格子的样式 */
  .slotMachine__col {
    height: 88px;
  }
  /* 奖品item的样式 */
  .slotMachine__li {
    height: 88px;
  }
  /* 图片样式 */
  .slotMachine__image {
    width: 120px;
    height: 120px;
  }
  /* 文字样式 */
  .slotMachine__label {
    color: red;
  }
</style>

```

:::
