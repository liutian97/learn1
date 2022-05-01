## 解决使用fetch发送json格式的post请求报错问题：

使用Fetch用法以 POST请求方式的参数传递时，可传输的数据格式有 x-www-form-urlencoded 和 json 两种。以 x-www-form-urlencoded 格式传参时，可以正常得到后台响应的数据，但是 以 json 格式传输时出现报错。

> 代码如下：

```javascript
fetch('http://localhost:3000/books', {
      method: 'post',
      body: JSON.stringify({
        uname: '张三',
        pwd: '456'
      }), // 请求参数，JSON.stringify() JS 数据对象转换为 JSON 字符串
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (data) {
        return data.text();
      }).then(function (data) {
        console.log(data)
      });
```



> 后台代码如下：

```javascript
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  // 允许访问该资源的外域 URL。*允许来自任何域的请求
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); // 额外的请求头进行声明， 允许客户端向服务器发送X-Requested-With的请求头信息
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // 允许客户端向服务器发送Content-Type的请求头信息
  res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
});
```

```javascript
// POST请求接口
app.post('/books', (req, res) => {
  res.send('POST请求传递参数!' + req.body.uname + '---' + req.body.pwd)  // body-parser 中间件提供的 body 属性
})
```

### 报错提示：

![](E:\web前端\lt前端学习\03-代码练习\37. 解决使用fetch发送json格式的post请求报错问题\images\报错.png)

### 解决方案：

> **方案1. 注释掉跨域里请求头设置中有mytoken那一行。**
>
> **方案2. 把请求头中 Access-Control-Allow-Headers 中的内容合并为一行。**



1. 方案1代码：

```javascript
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  // 允许访问该资源的外域 URL。*允许来自任何域的请求
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); // 额外的请求头进行声明， 允许客户端向服务器发送X-Requested-With的请求头信息
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // 允许客户端向服务器发送Content-Type的请求头信息
  // res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
});
```

2. 方案2代码：

```javascript
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  // 允许访问该资源的外域 URL。*允许来自任何域的请求
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,mytoken"); // 额外的请求头进行声明， 允许客户端向服务器发送X-Requested-With，Content-Type，mytoken的请求头信息
  next();
});
```

### 修改后运行成功

1. 使用方案1解决后访问成功

   ![](E:\web前端\lt前端学习\03-代码练习\37. 解决使用fetch发送json格式的post请求报错问题\images\解决.png)

2. 使用方案2解决后访问成功

![](E:\web前端\lt前端学习\03-代码练习\37. 解决使用fetch发送json格式的post请求报错问题\images\访问成功.png)

### 总结

按照上述方法解决了使用fetch发送json格式的post请求报错问题，但关于为什么以这种方式可以访问成功的原理还没有深入研究，在此仅记录此次解决的方案，在后续的学习中对于原因还需要进行更多的学习。