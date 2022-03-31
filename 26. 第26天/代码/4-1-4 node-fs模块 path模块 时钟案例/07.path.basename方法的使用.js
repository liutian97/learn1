// path.basename() 获取路径中的文件名
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'
const fullName = path.basename(fpath)
console.log(fullName); // index.html

// 第二个参数传扩展名（只拿到文件名，不要扩展名）
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt); // index