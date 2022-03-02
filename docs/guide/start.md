# 快速开始

直接开始

## 安装

``` sh

# vue2
npm install lattice-lottery --save

# vue3
npm install lattice-lottery-plus --save

```

## 注册

- vue2项目

``` javascript

// vue2 main.js
import Vue from 'vue'
import LatticeLottery from 'lattice-lottery'
import 'lattice-lottery/lib/lattice-lottery.css'

Vue.use(LatticeLottery)

```

- vue3项目

``` javascript

// vue3 main.js
import { createApp } from 'vue'
import App from './App.vue'

import LatticeLottery from 'lattice-lottery-plus'
import 'lattice-lottery-plus/lib/lattice-lottery.css'

const app = createApp(App);

app.use(LatticeLottery)

```

## 使用

参考Demo文档 [传送门](/lattice-lottery/demo)

## 效果图

lottery-grid

<img src="../.vuepress/public/images/lattice_lottery_logo.png" style="width: 330px; height=330px" />

lottery-list

<img src="../.vuepress/public/images/lottery_list.png" style="width: 330px; height=460px" />