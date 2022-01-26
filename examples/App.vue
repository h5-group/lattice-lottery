<template>
  <div id="app">
    <demo />
  </div>
</template>

<script>
import Demo from "./components/demo.vue";

export default {
  name: "App",
  components: {
    Demo,
  },
  mounted() {
    Math.rndNum = function (min, max) {
      if (min > max) min = [max, (max = min)][0];
      return this.floor(this.random() * (max - min + 1) + min);
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
