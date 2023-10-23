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
  SlotMachine,
  Turntable,
} from '../lib/lattice-lottery.umd.min'
import '../lib/lattice-lottery.css'

createApp(App).use(LotteryGrid).use(LotteryList).use(SlotMachine).use(Turntable).mount('#app')