import '../../lib/lattice-lottery.css'
import LatticeLottery from '../../lib/lattice-lottery.umd'

export default async ({
  Vue,
  router,
}) => {
  if (typeof process === 'undefined') {
    Vue.use(LatticeLottery)
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