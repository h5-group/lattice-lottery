# 抽奖列表

## 默认配置

lottery-grid 组件的奖品列表`list`没有个数要求，6个，9个，12奖品数量都可以。

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <lottery-list
      ref="lottery1"
      @onend="onend"
      :list="list"
      @onsubmit="request('lottery1')"
    ></lottery-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
    },
  }
</script>
```

:::

## 自定义配置

设置奖品数量，旋转圈数，旋转动画的配置

以6个奖品，旋转5圈，匀速动画为例：

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <lottery-list
      ref="lottery1"
      @onend="onend"
      :list="list"
       :circleTimes="5"
       velocity="invariance"
      @onsubmit="request('lottery1')"
    ></lottery-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
    },
  }
</script>
```

:::
