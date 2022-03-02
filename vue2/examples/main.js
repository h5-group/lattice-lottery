// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import xui from '../../packages'
// import xui from '../lib/lattice-lottery.umd.min'
// import '../lib/lattice-lottery.css'
// 注册组件库
Vue.use(xui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')