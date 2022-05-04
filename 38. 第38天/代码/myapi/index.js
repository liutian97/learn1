const express = require('express')
const app = express()
const bodyParser = require('body-parser')  // body-parser 这个第三方中间件，来解析请求体数据

// app.use(中间件函数)，即可定义一个全局生效的中间件

// 处理静态资源
app.use(express.static('public'))
// 处理参数
app.use(bodyParser.json()); // 解析 JSON 格式的请求体数据  （在 POST 请求参数时可获得 json 格式的数据）
app.use(bodyParser.urlencoded({ extended: false }));  // 解析 URL-encoded 格式的请求体数据
// 设置允许跨域访问该服务
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");  // 允许访问该资源的外域 URL。*允许来自任何域的请求
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With"); // 额外的请求头进行声明， 允许客户端向服务器发送X-Requested-With的请求头信息
//   res.header('Access-Control-Allow-Headers', 'Content-Type'); // 允许客户端向服务器发送Content-Type的请求头信息
//   // res.header('Access-Control-Allow-Headers', 'mytoken');
//   next();
// });

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  // 允许访问该资源的外域 URL。*允许来自任何域的请求
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, mytoken"); // 额外的请求头进行声明设置为一行
  next();
});





// 路由挂载到app上 （监听GET请求）
// 通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
// 通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数

// 测试 15 文件  async / await处理多个异步任务
app.get('/async1', (req, res) => {
  res.send('hello')
})
app.get('/async2', (req, res) => {
  if (req.query.info == 'hello') {
    res.send('world')
  } else {
    res.send('error')
  }
})

// 接口调用方式 axios 
app.get('/adata', (req, res) => {
  res.send('Hello axios!')
})
app.get('/axios', (req, res) => {
  res.send('axios get 传递参数' + req.query.id)  // 传统形式的 ？查询字符串 进行传递  // // 通过 params 选项传递参数
})
app.get('/axios/:id', (req, res) => {
  res.send('axios get (Restful) 传递参数' + req.params.id) // Restful 形式的 URL进行传递
})
app.delete('/axios', (req, res) => {
  res.send('axios delete 传递参数' + req.query.id)
})
app.post('/axios', (req, res) => {
  res.send('axios post 传递参数' + req.body.uname + '---' + req.body.pwd)
})
app.put('/axios/:id', (req, res) => {
  res.send('axios put 传递参数' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

app.get('/axios-json', (req, res) => {
  // 用 json 的格式响应数据
  res.json({
    uname: 'lisi',
    age: 12
  });
})

// 接口调用方式 fetch
app.get('/fdata', (req, res) => {
  res.send('Hello Fetch!')
})
app.get('/books', (req, res) => {
  res.send('传统的URL传递参数!' + req.query.id)
})
// Restful形式的URL传递参数时，在路由需要以 ：来接收传递的动态参数
app.get('/books/:id', (req, res) => {
  res.send('Restful形式的URL传递参数!' + req.params.id)
})
// (注意：) Restful形式的URL传递参数时，在路由也可以通过查询字符串的形式得到发送到服务器的参数 ，得到方式改为 req.query 即可
// app.get('/books/?id=456', (req, res) => {
//   res.send('Restful形式的URL传递参数!' + req.query.id)
// })
app.delete('/books/:id', (req, res) => {
  res.send('DELETE请求传递参数!' + req.params.id)
})
app.post('/books', (req, res) => {
  res.send('POST请求传递参数!' + req.body.uname + '---' + req.body.pwd)  // body-parser 中间件提供的 body 属性
})
app.put('/books/:id', (req, res) => {
  res.send('PUT请求传递参数!' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

// 测试 09文件里接口调用
// 提供 json 形式的接口
app.get('/json', (req, res) => {
  // 返回json格式的数据。使用 express 提供的API json()
  res.json({
    uname: 'lisi',
    age: 13,
    gender: 'male'
  });
})

// 测试 06文件里 Promise 接口调用方式 ajax
app.get('/a1', (req, res) => {
  setTimeout(function () {
    res.send('Hello TOM!')
  }, 1000);
})
app.get('/a2', (req, res) => {
  setTimeout(function () {
    res.send('Hello JERRY!')
  }, 2000);
})
app.get('/a3', (req, res) => {
  setTimeout(function () {
    res.send('Hello SPIKE!')
  }, 3000);
})

// 路由
// Promise 接口调用方式 ajax
app.get('/data', (req, res) => {
  res.send('Hello World!')
})
app.get('/data1', (req, res) => {
  setTimeout(function () {
    res.send('Hello TOM!')
  }, 1000);
})
app.get('/data2', (req, res) => {
  res.send('Hello JERRY!')
})

// 启动监听
app.listen(3000, () => {
  console.log('running...')
})