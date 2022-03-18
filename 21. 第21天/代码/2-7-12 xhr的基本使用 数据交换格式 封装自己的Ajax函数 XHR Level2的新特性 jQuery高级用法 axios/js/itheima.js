// (3) 处理data参数
// 把data 对象，转化成 查询字符串 的格式，从而提交给服务器
// @param {data} 需要发送到服务器的数据
// @returns {string} 返回拼接好的查询字符串 name=zs&age=10
function resolveData(data) {
  var arr = [];
  for (let k in data) {
    arr.push(k + '=' + data[k]);
  }
  return arr.join('&');
}
// var res = resolveData({ name: 'zs', age: '10' });
// console.log(res)   // name=zs&age=10

// (4) 定义itheima函数
function itheima(options) {
  var xhr = new XMLHttpRequest();
  // 把外界传递过来的参数对象，转换为 查询字符串
  var qs = resolveData(options.data);

  // (5) 判断请求的类型
  if (options.method.toUpperCase() === 'GET') {
    xhr.open(options.method, options.url + '?' + qs);
    xhr.send();
  } else if (options.method.toUpperCase() === 'POST') {
    xhr.open(options.method, options.url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(qs);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);  // 转对象
      options.success(result);  // options调用success函数（响应的数据需要执行的操作）
    }
  }
}












































// function resolveData(data) {
//   var arr = []
//   for (var k in data) {
//     var str = k + '=' + data[k]
//     arr.push(str)
//   }

//   return arr.join('&')
// }

// // var res = resolveData({ name: 'zs', age: 20 })
// // console.log(res)

// function itheima(options) {
//   var xhr = new XMLHttpRequest()

//   // 把外界传递过来的参数对象，转换为 查询字符串
//   var qs = resolveData(options.data)

//   if (options.method.toUpperCase() === 'GET') {
//     // 发起GET请求
//     xhr.open(options.method, options.url + '?' + qs)
//     xhr.send()
//   } else if (options.method.toUpperCase() === 'POST') {
//     // 发起POST请求
//     xhr.open(options.method, options.url)
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//     xhr.send(qs)
//   }

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var result = JSON.parse(xhr.responseText)
//       options.success(result)
//     }
//   }
// }