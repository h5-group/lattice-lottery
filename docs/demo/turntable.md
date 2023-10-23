# 大转盘

## 默认配置

大转盘，中奖返回中奖列表的奖品数据

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <turntable ref="turntable" :list="list" @onDraw="request('turntable')" @onend="onend" />
  </div>
  <br />
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
      request(name) {
        //模拟抽奖请求
        setTimeout(() => {
          let luckyIndex = this.rndNum(0, this.list.length - 1);
          console.log(luckyIndex);
          this.$refs[name].go(luckyIndex);
        }, 100);
      },
      //抽奖动画结束
      onend(data) {
        console.log("抽奖结果回调：", data);
        alert("恭喜您获得：" + data.label);
      },
    },
  }
</script>

<style>
</style>

```

:::

## 自定义转盘背景

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <turntable ref="turntable" class="myTurntable" :tableBg="turntableTableBg" :skew="false" :width="440" :list="list" @onDraw="request('turntable')" @onend="onend" />
  </div>
  <br />
</template>

<script>
  const turntableTableBg = require('@images/turntable/prize_table.png')
  export default {
    data() {
      return {
        turntableTableBg,
        list: [
          {
            label: "华为Mate 60 Pro+",
          },
          {
            label: "1000元现金红包",
          },
          {
            label: "500元现金红包",
          },
          {
            label: "谢谢参与",
          },
        ],
      };
    },
    mounted() {
      console.log('ce', turntableTableBg)
    },
    methods: {
      rndNum(min, max) {
        if (min > max) min = [max, (max = min)][0];
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      request(name) {
        //模拟抽奖请求
        setTimeout(() => {
          let luckyIndex = this.rndNum(0, this.list.length - 1);
          console.log(luckyIndex);
          this.$refs[name].go(luckyIndex);
        }, 100);
      },
      //抽奖动画结束
      onend(data) {
        console.log("抽奖结果回调：", data);
        alert("恭喜您获得：" + data.label);
      },
    },
  }
</script>

<style>
  .myTurntable .turntable__btn {
    width: 148px;
    height: 184px;
  }
</style>

```

:::
