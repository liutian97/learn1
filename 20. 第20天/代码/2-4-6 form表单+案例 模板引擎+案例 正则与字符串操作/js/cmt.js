function getCommentList() {
  // (1)获取评论列表数据
  $.ajax({
    method: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    // data: {},
    success: function (res) {
      if (res.status !== 200) return alert('获取评论列表失败！');
      var rows = [];
      $.each(res.data, function (i, item) {
        var  str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AB4B">评论时间：' + item.time + ' </span><span class="badge" style="background-color: #5BC0DE">评论人：' + item.username + '</span>' + item.content + '</li>';
        rows.push(str);
      })
      $('#cmt-list').empty().append(rows.join(''));
    }
  })
}
getCommentList();

// (2) 写jQuery入口函数   监听表单事件    阻止默认行为    serialize()函数快速获取表单数据
$(function () {
  // (2)-1 通过Ajax提交表单数据
  $('#formAddCmt').submit(function (e) {
    e.preventDefault();
    var data = $(this).serialize(); // 必须为每个表单元素添加 name 属性 (在接口文档的”发表评论“中查看接口参数)
    // (2)-2 发送Ajax请求把数据提交到服务器,添加评论数据
    $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
      if (res.status !== 201) {
        return alert("评论发表失败！");
      }
      getCommentList();  // 刷新评论列表
      $('#formAddCmt')[0].reset();  // 快速清空表单内容  获取表单的jQuery对象，转为DOM对象，使用reset()
    })
  })
})



// 完整练习
// (1) 获取评论列表
// function getCommentList() {
//   $.ajax({
//     method: 'GET',
//     url: 'http://www.liulongbin.top:3006/api/cmtlist',
//     success: function (res) {
//       if (res.status !== 200) {
//         return alert('获取评论列表失败！');
//       }
//       var rows = [];
//       $.each(res.data, function (i, item) {
//         var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AB4B">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE">评论人：' + item.username + '</span>' + item.content + '</li>'
//         rows.push(str);
//       })
//       $('#cmt-list').empty().append(rows.join(''));
//       getCommentList(); 
//     }
//   })
// }
// getCommentList();

// // (2) Ajax提交表单数据
// $(function () {
//   $('#formAddCmt').submit(function (e) {
//     e.preventDefault();
//     var data = $(this).serialize();
//     $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
//       if (res.status !== 201) {
//         return alert('评论发表失败！');
//       }
//       getCommentList();
//       $('#formAddCmt')[0].reset();
//     })
//   })
// })


