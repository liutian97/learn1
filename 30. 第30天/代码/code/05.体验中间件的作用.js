// 需求： 请求到达服务器后，每个路由都能得到这次请求到达服务器的时间
// 不使用中间件，需要在每个路由中定义一次。（Date.now（））

const express = require('express')
const app = express()

// 定义全局中间件的简化形式
app.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  const time = Date.now()
  // 为 req 对象，挂载自定义属性，把时间共享给后面的所有路由
  req.startTime = time
  next()
})

// 挂载路由
app.get('/', (req, res) => {
  res.send('Home Page.' + req.startTime)
})
app.post('/user', (req, res) => {
  res.send('User Page.' + req.startTime)
})

// 启动 web 服务器
app.listen(80, () => {
  console.log('http://127.0.0.1');
})
