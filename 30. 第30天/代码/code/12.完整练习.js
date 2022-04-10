const express = require('express')
const app = express()
// 导入Node.js 的 内置 querystring 模块 （专门用来处理查询字符串）
const qs = require('querystring')

// 自定义 解析请求体数据 的中间件函数
app.use((req, res, next) => {
  let str = ''
  // 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 监听 req 的 end 事件
  req.on('end', () => {
    const body = qs.parse(str)
    req.body = body
    next()
  })
})

// 定义路由
app.post('/user', (req, res) => {
  res.send(req.body)
})

// 开启服务器
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})