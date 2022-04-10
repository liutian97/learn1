const express = require('express');
const app = express();

// 路由挂载到app上
// postman 进行测试
app.get('/', (req, res) => {
  res.send('hello world.');
});
app.post('/', (req, res) => {
  res.send('Post Request.');
})

app.listen(80, () => {
  console.log('http://127.0.0.1');
})
