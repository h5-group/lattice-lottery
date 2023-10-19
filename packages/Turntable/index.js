import Turntable from './src/index.vue';

// 为组件提供 install 安装方法，供按需引入
Turntable.install = function (Vue) {
  Vue.component(Turntable.name, Turntable)
}

export default {
  Turntable,
};

export {
  Turntable,
};