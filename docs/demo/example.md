# 使用示例

## demo

实际开发中会有各种各样的样式需求，以下是一个简单的使用示例：

::: demo

```html
<template>
  <div style="display: flex; justify-content: center;">
    <div class="lotteryDemo">
      <lottery-grid
        class="lottery1"
        ref="lottery1"
        @onend="onend"
        :list="list"
        btnText=""
        @onsubmit="request('lottery1')"
      ></lottery-grid>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //注意：list不满8个会自动补全8个，内容：谢谢参与，超过8个会截取前8个
        list: [
          {
            name: 'iPhone13 128G手机',
            image: require('@images/example/prize1.png')
          },
          {
            name: '华为运动手表Watch3',
            image: require('@images/example/prize2.png')
          },
          {
            name: '2022元现金红包',
            image: require('@images/example/prize3.png')
          },
          {
            name: '588元现金红包',
            image: require('@images/example/prize4.png')
          },
          {
            name: '66元现金红包',
            image: require('@images/example/prize5.png')
          },
          {
            name: '视频会员月卡',
            image: require('@images/example/prize6.png')
          },
          {
            name: '10元话费',
            image: require('@images/example/prize7.png')
          },
          {
            name: '5元话费',
            image: require('@images/example/prize8.png')
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
        alert("恭喜您获得：" + data.name);
      },
    },
  }
</script>
<!-- 请注意项目中是否使用了预处理 是否需要使用 ::v-deep -->
<style>
  .lotteryDemo {
    width: 640px;
    height: 640px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../.vuepress/public/images/example/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  /* 奖品列表的蒙层，根据抽奖动画选中的位置被显示出来 */
  .lottery1 .prize__item__mask {
    background-image: url('../.vuepress/public/images/example/mask.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
    background-color: transparent;
    overflow: hidden;
  }
  /* 奖品图样式 */
  .lottery1 .prize__item__image {
    width: 100%;
    height: 100%;
  }
  /* 九宫格组件样式 为了跟随羡慕的自适应方案 */
  .lottery1 .lattice__lottery__box {
    width: 560px;
  }
  /* 奖品块样式 为了跟随羡慕的自适应方案 */
  .lottery1 .lattice__lottery__item {
    width: 170px;
    height: 170px;
    margin-bottom: 30px;
    border: none;
    font-size: 18px;
    background-color: transparent;
  }
  /* 抽奖按钮 */
  .lottery1 .lattice__lottery__btn {
    margin-top: -18px;
    width: 200px;
    height: 206px;
    border: none;
    background-image: url('../.vuepress/public/images/example/btn.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
```

:::

## 鼓励

如果觉得对你有帮助，就给点个星星吧~

[GitHub](https://github.com/h5-group/lattice-lottery) →

Think !
