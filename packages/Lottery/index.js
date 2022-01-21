import LotteryGrid from './src/lottery-grid.vue';
import LotteryList from './src/lottery-list.vue';

// 为组件提供 install 安装方法，供按需引入
LotteryGrid.install = function (Vue) {
  Vue.component(LotteryGrid.name, LotteryGrid)
}
LotteryList.install = function (Vue) {
  Vue.component(LotteryList.name, LotteryList)
}

export default {
  LotteryGrid,
  LotteryList
};

export {
  LotteryGrid,
  LotteryList
};