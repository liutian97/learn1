// (1) 步骤1 - 导入需要的模块并创建正则表达式

// 1.1 导入 fs 模块
const fs = require('fs');
// 1.2 导入 path 模块
const path = require('path');

// 1.3 正则匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// (2) 步骤2 - 使用 fs 模块读取需要被处理的 html 文件

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取文件失败！' + err.message);
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)

})

// (3) 步骤3 – 自定义 resolveCSS 方法

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr); // 如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', ''); // 结果数组的第 0 个元素是与正则表达式相匹配的文本
  // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
    if (err) return console.log('写入CSS样式失败！' + err.message);
    console.log('写入CSS样式文件成功！');
  })
}

// (4) 步骤4 – 自定义 resolveJS 方法

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则，提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr);
  // 4.3 将提取出来的内容，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if (err) return console.log('写入JavaScript脚本失败！' + err.message);
  })
  console.log('写入JS脚本成功！');
}

// (5) 步骤5 – 自定义 resolveHTML 方法

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  // 通过正则表达式匹配到需要替换的内容
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>');
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) return console.log('写入HTML文件失败！' + err.message);
    console.log('写入HTML页面成功！');
  })
}