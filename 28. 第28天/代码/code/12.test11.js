// 测试12文件，通过11文件的module.exports对象访问其内容

// 在外界使用 require 导入一个自定义模块的时，得到的成员就是 那个模块中，通过 module.exports 指向的那个对象
const m = require('./11.自定义模块');
console.log(m); // {}  (1) 默认情况下， 11文件中的module.exports = {}，所以12文件为{}

// (2) 在11文件导入变量，方法后 输出
// { username: 'zs', sayHello: [Function (anonymous)] }
// { username: 'zs', sayHello: [Function (anonymous)], age: 20 }

// (3) 11文件的module.exports 指向一个全新的对象，永远以 module.exports 指向的对象为准。
// { name: 'li', sayHi: [Function: sayHi] }