// 1. 导入 fs 模块，来操作文件
const fs = require('fs');
// 2. 调用 fs.readFile() 方法读取文件
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  // 2.1 打印失败的结果
  console.log(err); // null
  console.log('------------');
  // 2.2 打印成功的结果
  console.log(dataStr); // 111
})

// // 不存在文件11.txt 的读取：读取失败 的返回结果
// fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
//   console.log(err); // 错误对象
//   console.log('------------');
//   console.log(dataStr); // undefined
// })