# lattice-lottery

lattice-lottery是一个基于Vue的九宫格抽奖组件。

``` sh

# vue2
npm install lattice-lottery --save

# vue3
npm install lattice-lottery-plus --save

```

- vue2项目

``` javascript

// vue2 main.js
import Vue from 'vue'
import {
  LotteryGrid,
  LotteryList,
  SlotMachine
} from 'lattice-lottery'
import 'lattice-lottery/lib/lattice-lottery.css'

Vue.use(LotteryGrid)
Vue.use(LotteryList)
Vue.use(SlotMachine)

```

- vue3项目

``` javascript

// vue3 main.js
import { createApp } from 'vue'
import App from './App.vue'

import {
  LotteryGrid,
  LotteryList,
  SlotMachine
} from 'lattice-lottery-plus'
import 'lattice-lottery-plus/lib/lattice-lottery.css'

createApp(App).use(LotteryGrid).use(LotteryList).use(SlotMachine).mount('#app')

```

## github

[GitHub](https://github.com/h5-group/lattice-lottery) →

Thanks for the star !

## 文档

[食用文档](https://h5-group.github.io/lattice-lottery/) →

You're the best !
