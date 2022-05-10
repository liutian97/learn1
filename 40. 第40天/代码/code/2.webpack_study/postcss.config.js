// CommonJS 模块化

// webpack4
// 导入自动添加前缀的插件
// const autoprefixer = require('autoprefixer')
// module.exports = {
//   plugins: [autoprefixer] // 挂载插件
// }


// webpack5
// postcss-preset-env 预设： 插件集合
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
  plugins: [postcssPresetEnv]
}
