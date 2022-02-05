# 配置参数

```html

<lottery-grid :list="list" :circleTimes="3" velocity="speed" btnText=""></lottery-grid>

```

## Attributes

<br />

<script>
export default {
  data() {
    return {
      attributes: [
        {
          label: 'list',
          desc: '奖品列表数据',
          type: 'array',
          values: '必填',
          default: ''
        }, {
          label: 'circleTimes',
          desc: '动画圈数',
          type: 'string, number',
          values: '-',
          default: '3'
        }, {
          label: 'velocity',
          desc: '动画效果',
          type: 'string',
          values: '匀速：invariance；慢快慢：speed',
          default: 'speed'
        }, {
          label: 'btnText',
          desc: '抽奖按钮文案',
          type: 'string',
          values: '-',
          default: '抽奖'
        },
      ],
      listOptions: [
        {
          label: 'label',
          desc: '奖品名称',
          type: 'string',
          values: '-',
          default: '空'
        }, {
          label: 'image',
          desc: '奖品图',
          type: 'string',
          values: '-',
          default: '空'
        },
      ]
    }
  }
}
</script>

<template>
  <option-table :list="attributes" />
</template>

<br />

## list options

<br />

<template>
  <option-table :list="listOptions" />
</template>

<br />

## 样式配置

通常这类抽奖组件的定制化程度很高，所以决定直接重写css样式更直接方便。

```html

<lottery-grid :list="list" class="lottery1"></lottery-grid>

```

如果style便签定义了 `scoped` 属性，需要再类名前加上 `/deep/`。

```css
/* 如果没有声明 scoped 属性，不需要加 /deep/ */
<style lang="less" scoped>
  /* 为了防止样式重叠 建议给组件加上自定义的class类名 */
  .lottery1 {
    /* 奖品列表的蒙层，根据抽奖动画选中的位置被显示出来 */
    /deep/.prize__item__mask {
      background-color: rgba(0, 0, 205, 0.6);
    }
    /* 奖品图样式 */
    /deep/.prize__item__image {
      width: 100%;
      height: 100%;
    }
    /* 九宫格组件样式 为了跟随羡慕的自适应方案 */
    /deep/.lattice__lottery__box {
      margin: 0 auto;
      width: 560px;
    }
    /* 奖品块样式 为了跟随羡慕的自适应方案 */
    /deep/.lattice__lottery__item {
      width: 170px;
      height: 170px;
      margin-bottom: 30px;
      border: 1px solid #ccc;
      font-size: 18px;
    }
    /* 抽奖按钮 */
    /deep/.lattice__lottery__btn {
      width: 170px;
      height: 170px;
      border: 1px solid #ccc;
      border-radius: 50%;
      /* lottery-list 组件的抽奖按钮 */
      &.list {
        margin-top: 30px;
      }
    }
    /* 抽奖动画处于选中状态的奖品块样式 */
    /deep/.lattice__lottery__actItem {
      background-color: rebeccapurple;
      color: white;
    }
  }
</style>
```

还有疑问？那来看看demo吧~ [传送门](/demo)
