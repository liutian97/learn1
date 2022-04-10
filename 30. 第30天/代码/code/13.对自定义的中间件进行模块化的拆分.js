// 导入14文件（自定义的中间件函数），进行测试

const express = require('express')
const app = express()

// (1) 导入自己封装的中间件模块
const customBodyParser = require('./14.custom-body-parser')

// (2) 将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

// 定义路由
app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, (req, res) => {
  console.log('Express server running at http://127.0.0.1');
})

