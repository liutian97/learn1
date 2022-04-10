const express = require('express')
const app = express()

// (1) 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// (2) 使用 app.use() 注册中间件 
// 通过 parser.urlencoded() 这个中间件，来解析 表单中的 url - encoded 格式的数据
app.use(parser.urlencoded({ extended: false }))

// Express 内置的 express.urlencoded 中间件
// app.use(express.urlencoded({ extenden: false }))

// 创建路由  （postman中进行测试）
app.post('/user', (req, res) => {
  // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})
