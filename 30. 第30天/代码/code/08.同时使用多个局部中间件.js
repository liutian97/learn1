const express = require('express')
const app = express()

// 定义 mw1 中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了第1个局部生效的中间件函数');
  next()
}
// (1) 定义 mw2 中间件函数
const mw2 = (req, res, next) => {
  console.log('调用了第2个局部生效的中间件函数');
  next()
}

// (2) 创建路由，在路由中定义多个局部中间件
app.get('/', mw1, mw2, (req, res) => {
  res.send('Home Page.')
})
// app.get('/', [mw1, mw2], (req, res) => {
//   res.send('Home Page.')
// })

app.get('/user', (req, res) => {
  res.send('User page.')
})

// 启动服务器
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})
