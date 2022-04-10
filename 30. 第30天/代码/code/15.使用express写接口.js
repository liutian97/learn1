// (1)创建基本的服务器

const express = require('express')
const app = express()

// 配置解析表单数据的中间件 (获取 URL-encoded 格式的请求体数据 的前提)
app.use(express.urlencoded({ extended: false }))

// 【导入并注册16文件的路由模块】
// (2) 导入路由模块
const router = require('./16.apiRouter')
// (3) 把路由模块，注册到 app 上
app.use('/api', router)  // 访问路径前 要先拼接/api


app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})