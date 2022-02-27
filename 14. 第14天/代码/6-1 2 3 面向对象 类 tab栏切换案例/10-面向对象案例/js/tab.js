var that;
class Tab {
  constructor(id) {
    that = this;
    // 获取元素
    this.main = document.querySelector(id);
    this.tabadd = this.main.querySelector('.tabadd');
    this.ul = this.main.querySelector('.firstnav ul:first-child');   // li的父元素
    this.fsection = this.main.querySelector('.tabscon');             // section的父元素
    this.init();   // 页面打开加载就调用
  }
  // init 初始化操作让相关的元素绑定事件
  init() {
    this.updateNode();
    this.tabadd.onclick = this.addTab;
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;      // 点击完之后调用，不加括号
      this.removes[i].onclick = this.removeTab;  // 关闭的x号添加点击事件
      this.spans[i].ondblclick = this.editTab;   // 双击事件
      this.sections[i].ondblclick = this.editTab;
    }
  }
  // 动态添加元素 需要重新获取对应的元素
  updateNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.removes = this.main.querySelectorAll('.icon-guanbi');
    this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
  }


  // 1. 切换功能
  toggleTab() {
    that.clearClass();
    this.className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }

  // 清除li和section的样式
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }


  // 2. 添加功能
  addTab() {
    that.clearClass();
    var random = Math.random();
    // (1) 创建li元素和section元素
    var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';  
    var section = '<section class="conactive">测试 ' + random + ' </section>';
    // (2) 把这两个元素追加到对应的父元素里面
    that.ul.insertAdjacentHTML('beforeend', li);
    that.fsection.insertAdjacentHTML('beforeend', section);
    that.init();  // 重新调用一次init(),可使新增元素添加绑定事件
  }


  // 3. 删除功能
  removeTab(e) {
    e.stopPropagation();                 // 阻止冒泡 防止触发li 的切换点击事件
    var index = this.parentNode.index;   // X没有索引号, 它的父亲li的索引号
    console.log(index);
    // 3-1 根据索引号删除对应的li和section   remove()方法可以直接删除指定的元素
    that.lis[index].remove();
    that.sections[index].remove();
    that.init(); 
    // 3-2 删除的不是选中状态的li的时候,原来的选中状态li保持不变
    if (document.querySelector('.liactive')) return;
    // 3-3 删除了选中状态的这个li的时候, 让它的前一个li处于选定状态
    index--;
    that.lis[index] && that.lis[index].click();   // 手动调用点击事件 不需要鼠标触发  that.lis[index]判断是否存在index，为假时不再执行后面
  }


  // 4. 修改功能
  editTab() {
    var str = this.innerHTML;       // span里面的原文字赋值给变量
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();  // 双击禁止选定文字
    this.innerHTML = '<input type="text" />'
    var input = this.children[0];   // 当前双击span的第一个孩子
    input.value = str;              // str赋给新的input
    input.select();                 // 文本框里面的文字处于选定状态
    // 离开文本框就把文本框里面的值给span 
    input.onblur = function() {     
      this.parentNode.innerHTML = this.value;
    }
    // 按下回车也可把文本框里面的值给span
    input.onkeyup = function(e) {
      if (e.keyCode === 13) {
        this.blur();              // 手动调用表单失去焦点事件  不需要鼠标离开操作
      }
    }
  } 
}
new Tab('#tab');























// var that;
// class Tab {
//   constructor(id) {
//     that = this;
//     this.main = document.querySelector(id);
//     this.lis = this.main.querySelectorAll('li');
//     this.sections = this.main.querySelectorAll('section');
//     this.init();
//   }
//   init() {
//     for (var i = 0; i < this.lis.length; i++) {
//       this.lis[i].index = i;
//       this.lis[i].onclick = this.toggleTab;
//     }
//   }
//   toggleTab() {
//     that.clearClass();
//     this.className = 'liactive';
//     that.sections[this.index].className = 'conactive';
//   }

//   clearClass() {
//     for (var i = 0; i < this.lis.length; i++) {
//       this.lis[i].className = '';
//       this.sections[i].className = '';
//     }
//   }
// }
// new Tab('#tab');



























