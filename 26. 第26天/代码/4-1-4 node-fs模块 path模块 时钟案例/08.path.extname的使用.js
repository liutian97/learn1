// path.extname() 获取路径中的文件扩展名

const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext) // .html