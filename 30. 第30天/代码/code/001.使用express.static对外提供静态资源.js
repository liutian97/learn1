// 把clock文件夹作为对外提供静态资源目录（里面所有文件都可被访问）
const express = require('express');
const app = express();

// (1) 调用 express.static() 方法，快速的对外提供静态资源
// (2) 托管多个静态资源目录(按顺序)
// (3) 挂载路径前缀
app.use('/files', express.static('./files'));  // 访问路径 ：http://127.0.0.1/files/index.html
app.use(express.static('./clock')); // 访问路径：http://127.0.0.1/index.html。存放静态文件的目录名（./clock）不出现在 URL 中。


app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})




