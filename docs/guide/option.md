# 配置参数

## 九宫格抽奖

```html

<lottery-grid :list="list" :circleTimes="3" velocity="speed" btnText=""></lottery-grid>

```

### Attributes

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

### list options

<br />

<template>
  <option-table :list="listOptions" />
</template>

<br />

### 样式配置

通常这类抽奖组件的定制化程度很高，所以决定直接重写css样式更直接方便。

```html

<lottery-grid :list="list" class="lottery1"></lottery-grid>

```

如果style便签定义了 `scoped` 属性，需要再类名前加上 `::v-deep`。

关于`::v-deep`的相关内容不详细介绍，自行查阅下相关知识点。

```css
/* 如果没有声明 scoped 属性，不需要加 ::v-deep */
<style lang="less" scoped>
  /* 为了防止样式重叠 建议给组件加上自定义的class类名 */
  .lottery1 {
    /* 奖品列表的蒙层，根据抽奖动画选中的位置被显示出来 */
    ::v-deep .prize__item__mask {
      background-color: rgba(0, 0, 205, 0.6);
    }
    /* 奖品图样式 */
    ::v-deep .prize__item__image {
      width: 100%;
      height: 100%;
    }
    /* 九宫格组件样式 为了跟随羡慕的自适应方案 */
    ::v-deep .lattice__lottery__box {
      margin: 0 auto;
      width: 560px;
    }
    /* 奖品块样式 为了跟随羡慕的自适应方案 */
    ::v-deep .lattice__lottery__item {
      width: 170px;
      height: 170px;
      margin-bottom: 30px;
      border: 1px solid #ccc;
      font-size: 18px;
    }
    /* 抽奖按钮 */
    ::v-deep .lattice__lottery__btn {
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
    ::v-deep .lattice__lottery__actItem {
      background-color: rebeccapurple;
      color: white;
    }
  }
</style>
```

还有疑问？那来看看demo吧~ [传送门](/lattice-lottery/demo)

<br />

<br />

<br />

## 老虎机

```html

  <slot-machine
    class="myMachine"
    :colCount="4"
    :moveTime="6"
    :list="list"
    @onend="onMachineEnd"
    @onerror="onMachineError"
    ref="machine"
  />

```

### Attributes

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
          label: 'colCount',
          desc: '老虎机列数',
          type: 'string, number',
          values: '-',
          default: '3'
        }, {
          label: 'moveTime',
          desc: '转动次数',
          type: 'string, number',
          values: '-',
          default: '4'
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
      ],
      event: [
        {
          label: 'onend',
          desc: '动画结束',
          type: 'function',
          values: '动画结束，回调中奖结果',
          default: ''
        }, {
          label: 'onerror',
          desc: '错误事件',
          type: 'function',
          values: '传参异常判断，重复动画判断',
          default: ''
        }
      ],
    }
  }
}
</script>

<template>
  <option-table :list="attributes" />
</template>

### list options

<br />

<template>
  <option-table :list="listOptions" />
</template>

### event options

<br />

<template>
  <option-table :list="event" />
</template>

### 样式配置

如果style便签定义了 `scoped` 属性，需要再类名前加上 `::v-deep`。

关于`::v-deep`的相关内容不详细介绍，自行查阅下相关知识点。

```css
/* 如果没有声明 scoped 属性，不需要加 ::v-deep */
<style lang="less" scoped>
  /* 宽度大小 */
  .myMachine {
    width: 600px;
    /* 老虎机格子的样式 */
    :deep(.slotMachine__col) {
      height: 88px;
    }
    /* 奖品item的样式 */
    :deep(.slotMachine__li) {
      height: 88px;
    }
    /* 图片样式 */
    :deep(.slotMachine__image) {
      width: 100%;
      height: 100%;
    }
    /* 文字样式 */
    :deep(.slotMachine__label) {

    }
  }
</style>
```

还有疑问？那来看看demo吧~ [传送门](/demo/slot-machine.html#配置样式)

## 大转盘

```html

  <turntable
    ref="turntable"
    class="myTurntable"
    :list="list"
    @onDraw="request"
    @onend="onend" />

```

### Attributes

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
          label: 'width',
          desc: '转盘大小',
          type: 'string, number',
          values: '-',
          default: '340'
        }, {
          label: 'tableBg',
          desc: '转盘背景图，有值则不会使用默认转盘样式',
          type: 'image',
          values: '-',
          default: ''
        }, {
          label: 'skew',
          desc: '是否偏移一半角度使指针指向边界',
          type: 'boolean',
          values: '-',
          default: 'true'
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
      ],
      event: [
        {
          label: 'onend',
          desc: '动画结束',
          type: 'function',
          values: '动画结束，回调中奖结果',
          default: ''
        }, {
          label: 'onDraw',
          desc: '点击中间抽奖按钮',
          type: 'function',
          values: '',
          default: ''
        }
      ],
    }
  }
}
</script>

<template>
  <option-table :list="attributes" />
</template>

### list options

<br />

<template>
  <option-table :list="listOptions" />
</template>

### event options

<br />

<template>
  <option-table :list="event" />
</template>

### 样式配置

如果style便签定义了 `scoped` 属性，需要再类名前加上 `::v-deep`。

关于`::v-deep`的相关内容不详细介绍，自行查阅下相关知识点。

```css
/* 如果没有声明 scoped 属性，不需要加 ::v-deep */
<style lang="less" scoped>
  /* 宽度大小 */
  .myTurntable {

  }
</style>
```

还有疑问？那来看看demo吧~ [传送门](/demo/turntable.html#默认配置)