const fs = require('fs');
const path = require('path');
const join = path.join;
//  获取基于当前路径的目标文件
const resolve = (dir) => path.join(__dirname, '../', dir);

/**
 * @desc 大写转横杠
 * @param {*} str
 */
function upperCasetoLine(str) {
  let temp = str.replace(/[A-Z]/g, function (match) {
    return "-" + match.toLowerCase();
  });
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1);
  }
  return temp;
}

/**
 * @desc 获取组件入口
 * @param {String} path
 */
function getComponentEntries(path) {
  let files = fs.readdirSync(resolve(path));

  const componentEntries = files.reduce((fileObj, item) => {
    //  文件路径
    const itemPath = join(path, item);
    //  在文件夹中
    const isDir = fs.statSync(itemPath).isDirectory();
    const [name, suffix] = item.split('.');

    //  文件中的入口文件
    if (isDir) {
      fileObj[upperCasetoLine(item)] = resolve(join(itemPath, 'index.js'))
    }
    //  文件夹外的入口文件
    else if (suffix === "js") {
      fileObj[name] = resolve(`${itemPath}`);
    }
    return fileObj
  }, {});

  return componentEntries;
}

const buildConfig = {
  chainWebpack: config => {
    // 删除splitChunks，因为每个组件是独立打包，不需要抽离每个组件的公共js出来。
    config.optimization.delete('splitChunks')
    // 删除copy，不要复制public文件夹内容到lib文件夹中。
    config.plugins.delete('copy')
    // 删除html，只打包组件，不生成html页面。
    config.plugins.delete('html')
    // 删除preload以及prefetch，因为不生成html页面，所以这两个也没用。
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // 删除hmr，删除热更新。
    config.plugins.delete('hmr')
    // 删除自动加上的入口App。
    config.entryPoints.delete('app')
  },
  //  输出文件目录
  outputDir: resolve('lib'),
  //  webpack配置
  configureWebpack: {
    //  入口文件
    entry: getComponentEntries('../packages'),
    //  输出配置
    output: {
      //  文件名称
      filename: '[name]/index.js',
      //  构建依赖类型
      libraryTarget: 'umd',
      //  库中被导出的项
      libraryExport: 'default',
      //  引用时的依赖名
      library: 'lattice-lottery',
    }
  },
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/style.css'
    }
  },
}

module.exports = buildConfig;