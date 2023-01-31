<template>
  <home />
</template>

***

### 简单开始

```sh

# vue2
# 安装 sh
npm install lattice-lottery --save

# 注册 
import Vue from 'vue'

# 根据个人需要引入
import {
  LotteryGrid,
  LotteryList,
  SlotMachine
} from 'lattice-lottery'

Vue.use(LotteryGrid)
Vue.use(LotteryList)
Vue.use(SlotMachine)

new Vue({
  render: h => h(App),
}).$mount('#app')

```

``` sh

# vue3
# 安装 sh
npm install lattice-lottery-plus --save

# 注册 
import { createApp } from 'vue'
import App from './App.vue'

# 根据个人需要引入
import {
  LotteryGrid,
  LotteryList,
  SlotMachine
} from 'lattice-lottery-plus'

createApp(App).use(LotteryGrid).use(LotteryList).use(SlotMachine).mount('#app')

```
