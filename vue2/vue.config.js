const buildConfig = require('./build/config.build');
// console.log('aaa:', process.env.npm_lifecycle_event)
const defaultConfig = {
  lintOnSave: false,
  productionSourceMap: false,
  crossorigin: 'anonymous',
  publicPath: './',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: false,
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  }
};
module.exports = process.env.npm_lifecycle_event === 'lib' ? {
  ...defaultConfig,
  ...buildConfig,
} : defaultConfig