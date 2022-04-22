import LotteryGrid from './src/lottery-grid.vue';
import LotteryList from './src/lottery-list.vue';

const components = [
  LotteryGrid,
  LotteryList,
]

// 为组件提供 install 安装方法，供按需引入
LotteryGrid.install = function (Vue) {
  Vue.component(LotteryGrid.name, LotteryGrid)
}
LotteryList.install = function (Vue) {
  Vue.component(LotteryList.name, LotteryList)
}

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

export default {
  install,
  LotteryGrid,
  LotteryList
};

export {
  LotteryGrid,
  LotteryList
}