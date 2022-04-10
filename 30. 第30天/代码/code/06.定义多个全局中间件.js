const express = require('express')
const app = express()

// 定义多个全局中间件
app.use((req, res, next) => {
  console.log('调用了第1个全局中间件');
  next()
})
app.use((req, res, next) => {
  console.log('调用了第2个全局中间件');
  next()
})

// 定义一个路由
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 启动 web 服务器
app.listen(80, () => {
  console.log('http://127.0.0.1');
})