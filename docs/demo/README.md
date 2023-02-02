# 九宫格

## 默认配置

lottery-grid 组件的奖品列表`list`默认需要8个奖品，`list`不满8个会自动补全8个，内容：谢谢参与，超过8个会截取前8个。

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <lottery-grid
      ref="lottery1"
      @onend="onend"
      :list="list"
      @onsubmit="request('lottery1')"
    ></lottery-grid>
  </div>
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

设置旋转圈数，旋转动画的配置

以旋转5圈，匀速为例：

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <lottery-grid
      ref="lottery1"
      @onend="onend"
      :list="list"
       :circleTimes="5"
       velocity="invariance"
      @onsubmit="request('lottery1')"
    ></lottery-grid>
  </div>
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