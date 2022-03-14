$(function () {
  // 初始化右侧滚动条  方法定义在scroll.js中
  resetui();
  
  // (1) 为发送按钮绑定鼠标点击事件
  $('#btnSend').on('click', function () {
    // 获取用户输入的内容
    var text = $('#ipt').val().trim();
    if (text.length <= 0) {    // 判断用户输入的内容是否为空
      return $('#ipt').val('')
    }
    // 将用户输入的内容显示到聊天窗口中
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
    $('#ipt').val('')  // 清空输入框的内容
    resetui();         // 重置滚动条的位置
    getMsg(text);      // 发送请求，获取聊天内容
  })

  // (2) 发起请求获取聊天消息
  // 获取聊天机器人发送回来的消息
  function getMsg(text) {
    $.ajax ({
      type: 'GET',
      url: 'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken: text  // spoken不可改变
      },
      success: function (res) {
        // console.log(res);               // 在console中查看响应的状态写if条件 或 Network
        if (res.message === 'success') {
          var msg = res.data.info.text;    // 接收聊天消息
          $('#talk_list').append(' <li class="left_word"><img src="img/person01.png" /> <span>'+ msg +'</span></li>')
          resetui();
          // 调用 getVoice 函数，把文本转化为语音
          getVoice(msg);
        }
      }
    })
  }
  
  // (3) 将机器人的聊天内容转为语音
  function getVoice(text) {
    $.ajax({
      type: 'GET',
      url: 'http://www.liulongbin.top:3006/api/synthesize',
      data: {
        text: text
      },
      success: function (res) {
        // 如果请求成功，则 res.voiceUrl 是服务器返回的音频 URL 地址
        if (res.status === 200) {
          $('#voice').attr('src', res.voiceUrl)   // 文本转化为语音的url地址，语音的地址赋给audio的src属性
        }
      }
    })
  }

  // (4) 使用回车发送消息
  // 为文本框绑定 keyup 事件
  $('#ipt').on('keyup', function (e) {
    if (e.keyCode === 13) {
      $('#btnSend').click();  // 调用按钮元素的 click 函数，可以通过编程的形式(自动)触发按钮的点击事件
    }
  })

})



// 完整练习
// $(function () {
//   resetui();
//   // (1) 发送
//   $('#btnSend').on('click', function () {
//     var text = $('#ipt').val().trim();
//     if (text.length <= 0) {
//       return $('#ipt').val('');
//     }
//     $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>');
//     $('#ipt').val('');
//     resetui();
//     getMsg(text);
//   })

//   // (2) 响应
//   function getMsg(text) {
//     $.ajax({
//       type: 'GET',
//       url: 'http://www.liulongbin.top:3006/api/robot',
//       data: {
//         spoken: text
//       },
//       success: function (res) {
//         if (res.message === 'success') {
//           var msg = res.data.info.text;
//           $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>');
//           resetui();
//           getVoice(msg);
//         }
//       }
//     })
//   }

  // // (3) 转语音
  // function getVoice(text) {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://www.liulongbin.top:3006/api/synthesize',
  //     data: {
  //       text: text
  //     },
  //     success: function (res) {
  //       if (res.status === 200) {
  //         $('#voice').attr('src', res.voiceUrl);
  //       }
  //     }
  //   })
  // }

  // // (4) 敲空格发送
  // $('#ipt').on('keyup', function(e) {
  //   if (e.keyCode === 13) {
  //     $('#btnSend').click();
  //   }
  // })

//   $('#ipt').keyup(function (e) {
//     if (e.keyCode === 13) {
//       $('#btnSend').click();
//     }
//   })

// })
