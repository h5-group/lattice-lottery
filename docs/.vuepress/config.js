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
    ] : '',
    ['script', {}, `
      var myDialogHtml = 
        '<div class="myDialog-content">' +
        '  <div>该组件已弃用，请向往查看最新的组件文档。</div>' +
        '  <div>' +
        '    <a href="https://qweaa.github.io/lattice-lottery-new/?from=old">lattice-lottery-new</a>' +
        '  </div>' +
        '  <div>感谢您的支持~</div>' +
        '  <div>' +
        '    <a href="https://qweaa.github.io/lattice-lottery-new/?from=old" class="myDialog-btn">Go~</a>' +
        '  </div>' +
        '</div>'
      var myDialog = document.createElement("div")
      myDialog.className = 'myDialog'
      myDialog.innerHTML = myDialogHtml

      document.body.appendChild(myDialog)
    `],
    ['style', {}, `
      .myDialog{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1000;
      }
      .myDialog-content {
        width: 360px;
        padding-top: 40px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
        color: #666;
        background-color: white;
        border-radius: 6px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .myDialog-content > div {
        margin-bottom: 16px;
      }
      .myDialog-btn {
        display: block;
        width: 120px;
        height: 32px;
        text-align: center;
        background-color: #67C23A;
        color: white;
        border-radius: 4px;
        line-height: 32px;
        text-decoration: none;
      }
    `]
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