const path = require('path')
module.exports = {
  base: '.',
  title: 'lattice-lottery',
  description: '基于Vue的九宫格抽奖组件',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [{
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'Demo',
        link: '/demo/'
      }, {
        text: 'GitHub',
        link: 'https://www.baidu.com'
      }
    ],
    sidebar: {
      '/demo/': ['', 'lottery-list', 'example'],
      '/guide/': ['', 'start', 'introduce', 'option'],
      '/': false,
    }
  },
  plugins: [
    ['demo-container',
      {
        component: 'DemoBlock',
        locales: [{
            "lang": "zh-CN",
            "demo-block": {
              "hide-text": "隐藏",
              "show-text": "显示",
              "copy-text": "复制",
              "copy-success": "成功"
            }
          },
          {
            "lang": "en-US",
            "demo-block": {
              "hide-text": "Hide",
              "show-text": "Expand",
              "copy-text": "Copy",
              "copy-success": "Successful"
            }
          }
        ]
      }
    ]
  ], // 配置插件
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, './public/images')
      }
    }
  }
}