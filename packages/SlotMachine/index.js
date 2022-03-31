import SlotMachine from './src/index.vue';

// 为组件提供 install 安装方法，供按需引入
SlotMachine.install = function (Vue) {
  Vue.component(SlotMachine.name, SlotMachine)
}

export default {
  SlotMachine,
};

export {
  SlotMachine,
};