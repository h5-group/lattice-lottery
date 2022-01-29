import '../../lib/lattice-lottery.css'
import LatticeLottery from '../../lib/lattice-lottery.umd'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(LatticeLottery)
  }
}