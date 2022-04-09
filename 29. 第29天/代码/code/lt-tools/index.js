// 包的入口文件 （是package.json中main属性指向的文件）

// (1) 导入两个模块，得到需要向外共享的方法
const date = require('./src/dateFormat');
const escape = require('./src/htmlEscape')

// 向外共享dateFormat  (padZero()内部函数，不用向外暴露)
// module.exports = {      // 拆入到相应模块后，下面三个函数在index.js中不再存在
//     dateFormat,
//     htmlEscape,
//     htmlUnEscape   
//   }

// (2) 向外暴露需要的成员
module.exports = {
  ...date, // ...展开运算符(ES6新特性)  将date , escape对象展开交给另一个对象保存
  ...escape
}