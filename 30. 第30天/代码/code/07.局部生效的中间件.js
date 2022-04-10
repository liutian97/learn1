// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// (1) 定义中间件函数
const mw = (req, res, next) => {
  console.log('调用了局部生效的中间件');
  next()
}

// (2) 创建路由 增加参数mw 只在 当前路由生效
app.get('/', mw, (req, res) => {
  res.send('Home Page.')
})
// mw 不影响这个路由
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 启动 web 服务器
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})



