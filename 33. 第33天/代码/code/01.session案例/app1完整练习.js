const express = require('express')
const app = express()
// (1)导入 express-session
const session = require('express-session')

// (2) 配置 session 中间件
app.use(session({
  secret: 'lt',
  resave: false,
  saveUninitialized: true
}))

// 静态资源
app.use(express.static('./pages'))

// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extenden: false }))

// 登录的API接口（app.post() 方法，可以监听客户端的 POST 请求）向 session 中存数据
app.post('/api/login', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({
      status: 1,
      msg: '登录失败'
    })
  }
})

// (3) 向 session 中存数据    req.session
req.session.user = req.body
req.session.islogin = true

res.send({
  status: 0,
  msg: '登录成功'
})

// (4) 从 session 中取数据   req.session
// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  if (!req.session.islogin) {
    return res.send({
      status: 1,
      msg: 'fail'
    })
  }
})
res.send({
  status: 0,
  msg: 'success',
  username: req.session.user.username
})

// (5) 清空 session   req.session.destroy()
// 退出登录的接口
app.post('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    statsu: 0,
    msg: '退出登录成功'
  })
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})