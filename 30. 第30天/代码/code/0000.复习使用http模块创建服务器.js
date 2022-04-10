// (1) 导入 http 模块
const http = require('http')
// (2) 创建 web 服务器实例
const server = http.createServer()

// (3) 为服务器实例绑定 request 事件
server.on('request', (req, res) => {
  // const str = '您的请求方式是 ' + req.method + ', 请求地址是 ' + req.url
  const str = `您的请求方式是${req.method}, 请求地址是${req.url}`

  // (3-1) 解决中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  res.end(str)

})

// (4) 启动服务器
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1');
})