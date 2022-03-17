$(function () {
  // (5) 定义补零函数
  function padZero(n) {
    if (n < 10) {
      return '0' + n;
    } else {
      return n;
    }
    // n = n < 10 ? '0' + n : n;  使用三元  错
  }


  // (4) 定义格式化时间的过滤器
  template.defaults.imports.dateFormat = function (dtStr) {
    var date = new Date(dtStr);
    var y = date.getFullYear();
    var m = padZero(date.getMonth() + 1);
    var d = padZero(date.getDate());
    var hh = padZero(date.getHours());
    var mm = padZero(date.getMinutes());
    var ss = padZero(date.getSeconds());

    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':'+ ss ;
  }


  // (1) 获取新闻列表数据（函数）
  function getNewsList() {
    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
      if (res.status !== 200) {
        return alert('获取新闻列表失败！');
      }
      // 把每一项的 tags 属性，从字符串改造成字符串的数组
      // 方法1：for循环遍历
      for (var i = 0; i < res.data.length; i++) {
        res.data[i].tags = res.data[i].tags.split(',');  
      }
      // console.log(res);    // 测试tags是否变成数组

      // 方法2： jQuery 遍历元素操作
      // $.each(res.data, function (i, item) {
      //   res.data[i].tags = res.data[i].tags.split(',');
      // })
      // console.log(res);

      var htmlStr = template('tpl-news', res);  // 调用 template 函数
      $("#news-list").html(htmlStr);
  
    })
  }
  getNewsList();
})

