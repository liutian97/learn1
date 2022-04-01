// req 是请求对象，包含了与客户端相关的数据和属性

const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
  // (1) res
  // req.url 是客户端请求的 URL 地址
  const url = req.url;
  // req.method 是客户端请求的 method 类型
  const method = req.method;
  const str = `Your request url is ${url},and request method is ${method}`;
  console.log(str); // 发出 请求的URL地址，是从端口号后面的 /开始的
  // 浏览器默认的请求方式是GET，可用postman模拟测试POST请求，如写入请求地址：http://127.0.0.1/about.html
  // 打印的str是：Your request url is /index.html,and request method is POST

  // (2) res 向客户端发送指定的内容，并结束这次请求的处理过程
  res.end(str); // （在浏览器页面显示）Your request url is /index.html,and request method is GET
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})