// apiRouter.js 【路由模块】

const express = require('express')
// 创建一个路由实例
const router = express.Router()

// 挂载具体的路由
// GET 接口
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0,
    msg: 'GET请求成功！',
    data: query
  })
})

// POST接口
router.post('/post', (req, res) => {
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  const body = req.body
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0,
    msg: 'POST请求成功！',
    data: body
  })
})




// 向外导出路由模块
module.exports = router