// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
// import xui from '../../packages'
import xui from '../lib/index'

// import {
//   LotteryGrid,
//   LotteryList,
//   SlotMachine
// } from '../lib/index'

// import SlotMachine from '../lib/slot-machine'
// import {
//   LotteryGrid,
//   LotteryList
// } from '../lib/lottery'

// 注册组件库
Vue.use(xui)

// Vue.use(LotteryGrid)
// Vue.use(LotteryList)
// Vue.use(SlotMachine)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')