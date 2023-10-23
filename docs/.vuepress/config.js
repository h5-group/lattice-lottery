const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  base: '/lattice-lottery/',
  title: 'lattice-lottery',
  description: '基于Vue的九宫格抽奖组件',
  head: [
    isProd ? [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d98e51720ec70609a3d5998161b75bab";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ] : ''
  ],
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
        link: 'https://github.com/h5-group/lattice-lottery'
      }
    ],
    sidebar: {
      '/demo/': ['', 'lottery-list', 'slot-machine', 'turntable', 'example'],
      '/guide/': ['', 'start', 'introduce', 'option', 'version', 'contact'],
      '/': false,
    },
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