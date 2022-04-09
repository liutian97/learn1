// (1)测试 lt-tools/index.js的格式化时间函数dateFormat()是否可共享
// 导入index.js文件
// const lt = require('./lt-tools/index');

// 不指定index.js文件也能测试成功，原因是：package.json中的main属性指向了index.js
const lt = require('./lt-tools');
// 调用函数dateFormat()
const dtStr = lt.dateFormat(new Date());
console.log(dtStr);
console.log('-----------------------');

// (2) 测试 转义 HTML 的方法 htmlEscape()是否成功
const htmlStr = '<h1 title="abc">这是h1标题<span>123&nbsp;</span></h1>'
const str = lt.htmlEscape(htmlStr);
console.log(str);
console.log('-----------------------');

// (3) 测试 还原 HTML 的方法 htmlUnEscape()
const str2 = lt.htmlUnEscape(str);
console.log(str2);






























// const itheima = require('./itheima-tools')

// // 格式化时间的功能
// const dtStr = itheima.dateFormat(new Date())
// console.log(dtStr)
// console.log('-----------')

// const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// const str = itheima.htmlEscape(htmlStr)
// console.log(str)
// console.log('-----------')

// const str2 = itheima.htmlUnEscape(str)
// console.log(str2)