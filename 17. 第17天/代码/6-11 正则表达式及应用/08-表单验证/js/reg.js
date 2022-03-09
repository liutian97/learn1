window.onload = function () {
  // 获取元素
  var tel = document.getElementById('tel');
  var qq = document.querySelector('#qq');
  var nc = document.querySelector('#nc');
  var msg = document.querySelector('#msg');
  var pwd = document.querySelector('#pwd');
  var surePwd = document.querySelector('#surepwd');

  // 正则表达式
  var regTel = /^1[3|4|5|7|8]\d{9}$/;      // 手机号码的正则表达式
  var regQQ = /^[1-9]\d{4,}$/              // 10000开始
  var regNc = /^[\u4e00-\u9fa5]{2,8}$/     // 中文
  var regMsg = /^\d{6}$/                   // 6位
  var regPwd = /^[a-zA-Z0-9_-]{6,16}$/     // 6-16位数字，字母，下划线，横线

  // 调用验证
  RegExp(tel, regTel);  // 手机号码
  RegExp(qq, regQQ);    // QQ
  RegExp(nc, regNc);    // 昵称
  RegExp(msg, regMsg);  // 短信验证
  RegExp(pwd, regPwd);  // 登录密码

  // 表单验证函数
  function RegExp(ele, reg) {
    ele.onblur = function () {
      if (reg.test(this.value)) {
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
      } else {
        this.nextElementSibling.className = 'error';
        this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
      }
    }
  };

  // 确认密码
  surePwd.onblur = function () {
    if (this.value == pwd.value) {
      this.nextElementSibling.className = 'success';
      this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
    } else {
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次输入密码不一致，请重新输入';
    }
  }
  
}

