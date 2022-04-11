// (1)创建基本的服务器

const express = require('express')
const app = express()

// (4) 配置解析表单数据的中间件 (获取 URL-encoded 格式的请求体数据 的前提)
app.use(express.urlencoded({ extended: false }))


// (6) 在配置 CORS 中间件之前声明 JSONP 的接口
// 路径加/api,（因为JSONP接口没有注册到路由模块上） 只能用get请求
app.get('/api/jsonp', (req, res) => {
  // TODO: 定义 JSONP 接口具体的实现过程
  // (6-1) 获取客户端发送过来的回调函数的名字
  const funcName = req.query.callback
  // (6-2) 得到（定义）要通过 JSONP 形式发送给客户端的数据
  const data = { name: 'zs', age: 12 }
  // (6-3) 拼接出一个函数调用的字符串  // `callback(data)`
  const scriptStr = `${funcName}(${JSON.stringify(data)})` // 对象 转换成 JSON格式的 字符串
  // (6-4) 拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行
  res.send(scriptStr)

})



// (5) 解决接口跨域问题 （一定在路由之前，配置 cors 这个中间件）
const cors = require('cors') // 导入
app.use(cors())  // 全局注册

// 【导入并注册16文件的路由模块】
// (2) 导入路由模块
const router = require('./16.apiRouter')
// (3) 把路由模块，注册到 app 上
app.use('/api', router)  // 访问路径前 要先拼接/api


app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})