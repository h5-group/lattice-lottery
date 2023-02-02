// import {
//   LotteryGrid,
//   LotteryList,
//   SlotMachine
// } from '../../packages/index'

// import {
//   LotteryGrid,
//   LotteryList,
//   SlotMachine
// } from '../../vue2/lib/lattice-lottery.umd.min'

// const {
//   LotteryGrid,
//   LotteryList,
//   SlotMachine
// } = require('../../vue2/lib/lattice-lottery.umd.min')

export default async ({
  Vue,
  router,
}) => {
  console.log('============>', typeof process)
  if (typeof process === 'undefined') {
    // Vue.use(LotteryGrid)
    // Vue.use(LotteryList)
    // Vue.use(SlotMachine)
  }
  /**
   * 路由切换事件处理
   */
  router.beforeEach((to, from, next) => {

    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
      }
    }

    // continue
    next();
  });
}