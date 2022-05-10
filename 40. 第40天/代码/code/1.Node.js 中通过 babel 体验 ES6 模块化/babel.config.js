// Babel 是一个 JavaScript 编译器。主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
// 预设
const presets = [
  ['@babel/env', {
    targets: {
      edge: '17',
      firefox: '60',
      chrome: '67',
      safari: '11.1'
    }
  }]
];

// presets 作为属性节点，将此对象暴露出去
module.exports = { presets }
