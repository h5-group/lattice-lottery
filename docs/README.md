<template>
  <home />
</template>

***

### 简单开始

```sh

# vue2
# 安装 sh
npm install lattice-lottery --save

# 注册 
import Vue from 'vue'
import LatticeLottery from 'lattice-lottery'
import 'lattice-lottery/lib/lattice-lottery.css'

Vue.use(LatticeLottery)


# vue3
# 安装 sh
npm install lattice-lottery-plus --save

# 注册 
import { createApp } from 'vue'
import App from './App.vue'

import LatticeLottery from 'lattice-lottery-plus'
import 'lattice-lottery-plus/lib/lattice-lottery.css'

const app = createApp(App);

app.use(LatticeLottery)

```
