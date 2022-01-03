window.addEventListener('load', function() {
  // 1. 获取元素
  var focus = document.querySelector('.focus');
  var arrow_l = document.querySelector('.arrow-l');
  var arrow_r = document.querySelector('.arrow-r');
  var focusWidth = focus.offsetWidth;

  // 2. 鼠标经过focus模块，显示左右按钮;离开隐藏左右按钮
  focus.addEventListener('mouseenter', function() {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null;    // 清除定时器变量
  });
  focus.addEventListener('mouseleave', function() {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function() {       // 自动播放轮播图
    // 手动调用点击事件
    arrow_r.click();
    }, 2000);
  });

  // 3. 动态生成小圆圈 
  var ul = focus.querySelector('ul');
  var ol = focus.querySelector('.circle');
  for (var i = 0; i < ul.children.length; i++) {    // 有几张图片，就生成几个小圆圈
    // 创建一个小li 
    var li = document.createElement('li');   
    //  记录当前小圆圈的索引号 通过自定义属性
    li.setAttribute('index', i);
     // 把小li插入到ol 里面
    ol.appendChild(li);                     
    // 4. 小圆圈的排他思想 在生成小圆圈的同时直接绑定点击事件
    li.addEventListener('click', function() {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';     // 排他 把所有的小li 清除 current 类名
      }
      this.className = 'current';          // 设置当前的小li current 类名 

      // 5. 点击小圆圈，移动图片 移动的是 ul 
      // 点击某个小li 就拿到当前小li 的索引号
      var index = this.getAttribute('index');
      // index,图片显示的张数，小圆圈显示的个数相对应。
      // 当点击了某个小li 把这个li 的索引号给 num  
      num = index;
      // 当点击了某个小li 把这个li 的索引号给 circle  
      circle = index;
      // num = circle = index;
      // ul移动距离：图片滚动小圆圈的索引号index * 图片的宽度focusWidth
      animate(ul, -index * focusWidth);
    });
  }
  ol.children[0].className = 'current';      // 把ol里面的第一个小li设置类名为 current
  // 6. 克隆第一张图片(li)放到ul 最后面
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);

  //  7. 点击右侧按钮， 图片滚动一张
  var num = 0;   // num 显示图片对应的张数。
  // circle 控制小圆圈的播放
  var circle = 0;
  // flag 节流阀
  var flag = true; 
  arrow_r.addEventListener('click', function() {
    if (flag) {
      flag = false;   // 关闭节流阀
      // 如果到了最后复制的一张图片，ul 要快速复原 left 改为 0
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function() {
        flag = true;   // 打开节流阀
      });
  
      // 8. 点击右侧按钮，小圆圈跟随一起变化 声明一个变量控制小圆圈的播放
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      // 调用函数
      circleChange();
      }  
  });

  //  9. 点击左侧按钮
  arrow_l.addEventListener('click', function() {
    if (flag) {
      flag = false;
      // 如果到了最后第一张图片
    if (num == 0) {
      num = ul.children.length - 1;
      ul.style.left = -num * focusWidth + 'px';
    }
    num--;
    animate(ul, -num * focusWidth, function() {
      flag = true;
    });

    // 点击按钮，小圆圈跟随一起变化 声明一个变量控制小圆圈的播放
    circle--;
    if (circle < 0) {
      circle = ol.children.length - 1;
    }
    // 调用函数
    circleChange();
    }  
  });
  // 小圆圈样式改变函数
  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';              // 排他
    }
    ol.children[circle].className = 'current';    // 设置当前
  }
  // 10. 自动播放轮播图
  var timer = setInterval(function() {
    // 手动调用点击事件
    arrow_r.click();
  }, 2000);
})
