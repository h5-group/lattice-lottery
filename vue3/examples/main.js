// examples/main.js
import {
  createApp
} from 'vue'
import App from './App.vue'

// 导入组件库
// import xui from '../../packages'
import xui from '../lib/lattice-lottery.umd.min'
import '../lib/lattice-lottery.css'

createApp(App).use(xui).mount('#app')