// // 1. 导入 fs 文件系统模块
// const fs = require('fs');
// // 2. 调用 fs.writeFile() 方法，写入文件的内容
// fs.writeFile('./files/2.txt', '1234', function(err) {
//   // 2.1 如果文件写入成功，则 err 的值等于 null
//   console.log(err); // null
// })

// // 没有F盘 写入失败 的结果
// fs.writeFile('F:/files/2.txt', '1234', function(err, dataStr) {
//   // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
//   console.log(err); // 错误对象 [Error: ENOENT: no such file or directory,
// })


// 判断文件是否写入成功
const fs = require('fs');
fs.writeFile('./files/3.txt', 'ok123', function(err) {
  if (err) {
    return console.log('文件写入失败！' + err.message);
  }
  console.log('文件写入成功！'); // 文件写入成功！
})