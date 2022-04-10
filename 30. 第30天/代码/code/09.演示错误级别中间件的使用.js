const express = require('express')
const app = express()

// (1) 注册路由
app.get('/', (req, res) => {
  // (1-1) 人为制造的错误
  throw new Error('服务器内部发生了错误！')
  res.send('Home Page.')
})

// (2) 定义错误级别的中间件 (路由之后)， 捕获整个项目的异常错误，防止程序的崩溃
app.use((err, req, res, next) => {
  console.log('发生了错误！' + err.message);
  res.send('Error:' + err.message)

})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})

