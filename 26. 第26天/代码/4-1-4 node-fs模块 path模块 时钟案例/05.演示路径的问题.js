const fs = require('fs')
  // // (1) 出现路径拼接错误的原因：提供了 ./ 或 ../ 开头的相对路径
  // // 解决：提供完整的文件存放路径
  // fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  //   if (err) {
  //     return console.log('文件读取失败！' + err.message);
  //   }
  //   console.log('文件读取成功！' + dataStr);
  // })


// // (2) 完整的路径（从盘符开始），选择文件右键，点“复制路径” ，注意： js里面\是转义字符，必须前面再加一个\
// // 移植性差、不利于维护
// fs.readFile('E:\\web前端\\lt前端学习\\03-代码练习\\26. 第26天\\代码\\4-1-4 node-fs模块 path模块 时钟案例\\files\\1.txt', 'utf8', function(err, dataStr) {
//   if (err) {
//     return console.log('文件读取失败！' + err.message);
//   }
//   console.log('文件读取成功！' + dataStr);
// })


// __dirname 表示当前文件所处的目录
console.log(__dirname); // E:\web前端\lt前端学习\03-代码练习\26. 第26天\代码\4-1-4 node-fs模块 path模块 时钟案例
// (3) 使用__dirname完美解决路径动态拼接问题
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('文件读取失败！' + err.message);
  }
  console.log('文件读取成功！' + dataStr);
})