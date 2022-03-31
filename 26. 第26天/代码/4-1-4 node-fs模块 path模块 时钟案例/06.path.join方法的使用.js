const path = require('path')
const fs = require('fs')

// path.join 路径拼接

// 注意： '../'有抵消路径上一层路径的功能， './' 没有
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr); // \a\b\d\e

const pathStr1 = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr1); // \a\d\e

// path.join会把文件中的.自动处理掉
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message);
  }
  console.log(dataStr);
})


// 不要直接使用 + 进行字符串的拼接,如果文件名前有. 会出错
// fs.readFile(__dirname + '/files/1.txt')   // 没有· 正确

// fs.readFile(__dirname + './files/1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//       return console.log('文件读取失败！' + err.message); // '....时钟案例.\files\1.txt'
//     }
//     console.log('文件读取成功！' + dataStr);
//   })