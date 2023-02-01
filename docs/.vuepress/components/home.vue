<template>
  <div class="home">
    <div class="home__logo"></div>
    <div class="home__name">lattice-lottery</div>
    <div class="home__desc">基于Vue的活动抽奖组件</div>
    <a href="/lattice-lottery/guide/" class="home__go">快速了解</a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.home__logo {
  width: 330px;
  height: 330px;
  background-image: url("../public/images/lattice_lottery_logo.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 24px;
}
.home__name {
  color: #2c3e50;
  font-size: 48px;
  margin-bottom: 24px;
}
.home__desc {
  color: #6a8bad;
  font-size: 28px;
  margin-bottom: 24px;
}
.home__go {
  font-size: 24px;
  color: #fff;
  background-color: #3eaf7c;
  padding: 12px 24px;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
  margin-bottom: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home__go:hover {
  cursor: pointer;
}
.home__go::after {
  content: "";
  // position: absolute;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
}
</style>
