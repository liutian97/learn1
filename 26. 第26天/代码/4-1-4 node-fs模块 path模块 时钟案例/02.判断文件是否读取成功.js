// 判断 err 对象是否为 null，来判断文件读取的结果
// 读取成功， err是null,    err转布尔值为false
// 读取失败， err是错误对象，对象转布尔值为true

const fs = require('fs');
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('文件读取失败！' + err.message);
  }
  console.log('文件读取成功！' + dataStr); // 文件读取成功！111
})

// // 不存在文件11.txt 的读取：读取失败 的返回结果
// fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
//   if (err) {
//     return console.log('文件读取失败！' + err.message); // 文件读取失败！ENOENT: no such file or directory, ....
//   }
//   console.log('文件读取成功！' + dataStr);
// })