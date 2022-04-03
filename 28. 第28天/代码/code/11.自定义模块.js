// 使用11文件定义模块，12文件用于测试

// (1) 在一个自定义模块中，默认情况下， module.exports = {}

// (2) 向 module.exports 对象上挂载 username 属性
module.exports.username = 'zs';
// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function() {
  console.log('hi');
}

const age = 20

module.exports.age = age;

// 让 module.exports 指向一个全新的对象
module.exports = {
  name: 'li',
  sayHi() {
    console.log('hhh');
  }
}