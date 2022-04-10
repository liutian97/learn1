// 使用03文件定义的路由模块
const express = require('express')
const app = express()

// (1) 导入路由模块
const router = require('./03.router.js')

// (2) 使用app.use()注册路由模块 (此处的路由模块就是中间件)
// app.use(router)         // 访问路径：http://127.0.0.1/user/list  

// (3) 为路由模块添加前缀
app.use('/api', router)    // 访问路径：http://127.0.0.1/api/user/list

// 注意： app.use() 函数的作用，用来注册全局中间件
// app.use(express.static('./files')) // 托管静态资源

app.listen(80, () => {
  console.log('http://127.0.0.1');
})
