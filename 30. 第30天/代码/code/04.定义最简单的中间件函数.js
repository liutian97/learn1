const express = require('express')
const app = express()

// // (1) 定义一个中间件函数
// const mw = function (req, res, next) {
//   console.log('这是一个最简单的中间件函数');
//   // 把流转关系，转交给下一个中间件或路由  ( 执行(3) )
//   next();
// }

// // (2) 将 mw 注册为一个全局生效的中间件
// app.use(mw)

// 综合(1)(2), 定义全局中间件的简化形式
app.use((req, res, next) => {
  console.log('这是一个最简单的中间件函数');
  next()
})

// (3) app上挂载路由
app.get('/', (req, res) => {
  console.log('调用了 / 这个路由');
  res.send('Home page.')
})

app.post('/user', (req, res) => {
  console.log('调用了 /user 这个路由');
  res.send('User page.')
})

// 启动 web 服务器
app.listen(80, () => {
  console.log('http://127.0.0.1');
})

