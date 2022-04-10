const express = require('express')
const app = express()
// 导入 Node.js 的内置模块 querystring
const qs = require('querystring')

//  (1) 自定义一个解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // (2) 监听 req 的 data 事件
  req.on('data', (chunk) => {
    // 拼接请求体数据，隐式转换为字符串
    str += chunk
  })
  // (3) 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str)  // 在postman 用 x-www-form-urlencoded的数据格式进行测试的结果 name=zs&age=12&gender=%E7%94%B7
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    // (4) 使用 querystring 模块解析请求体数据
    const body = qs.parse(str)   // { name: 'zs', age: '12', gender: '男' }
    // (5)  将解析出来的数据对象挂载为 req.body
    req.body = body
    next()
  })
})

// 定义路由
app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, (req, res) => {
  console.log('Express server running at http://127.0.0.1');
})
