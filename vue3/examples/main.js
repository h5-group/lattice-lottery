// examples/main.js
import {
  createApp
} from 'vue'
import App from './App.vue'

// 导入组件库
// import xui from '../../packages'
// createApp(App).use(xui).mount('#app')


import {
  LotteryGrid,
  LotteryList,
  SlotMachine
} from '../lib/lattice-lottery.umd.min'

createApp(App).use(LotteryGrid).use(LotteryList).use(SlotMachine).mount('#app')