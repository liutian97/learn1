// 在 postman 的 Body - raw - JSON 发送 JSON 格式的数据到服务器
// 解析之后，会把解析的数据挂载到 req 的 body 属性， 后续的中间件或路由就可访问 req.body

const express = require('express')
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// (1-1) 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据 
app.use(express.json())
// (1-2) 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))


// (2) 挂载路由
// (2-1) 测试发送的 JSON 格式的数据
app.post('/user', (req, res) => {
  // 在服务器，req.body 属性，用来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body);   //  { name: 'zs', age: 12 }
  res.send('ok')
})

// (2-1) 测试发送的 url-encoded 格式的数据
app.post('/book', (req, res) => {
  // 在服务器端，可以通过 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})



























// // 导入 express 模块
// const express = require('express')
// // 创建 express 的服务器实例
// const app = express()

// // 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// // 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
// app.use(express.json())
// // 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
// app.use(express.urlencoded({ extended: false }))

// app.post('/user', (req, res) => {
//   // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
//   // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
//   console.log(req.body)
//   res.send('ok')
// })

// app.post('/book', (req, res) => {
//   // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
//   console.log(req.body)
//   res.send('ok')
// })

// // 调用 app.listen 方法，指定端口号并启动web服务器
// app.listen(80, function () {
//   console.log('Express server running at http://127.0.0.1')
// })
