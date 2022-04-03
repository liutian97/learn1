// 测试09文件是否能访问到08文件的变量和方法

const custom = require('./08.模块作用域') // 文件名的后缀.js可以省略  (注意)./ 的点不能省略
console.log(custom); // {}