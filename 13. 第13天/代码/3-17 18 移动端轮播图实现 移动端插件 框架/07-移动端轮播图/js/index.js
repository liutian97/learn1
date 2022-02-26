window.addEventListener('load', function() {
  // 1. 获取元素 
  var focus = document.querySelector('.focus');
  var ul = focus.children[0];
  var ol = focus.children[1];
  var w = focus.offsetWidth;    // 获得focus 的宽度

  // 2. 利用定时器自动轮播图片
  var index = 0;
  var timer = setInterval(function () {
    index++;
    var translatex = -index * w;
    ul.style.transition = 'all .3s';   // 过渡效果
    // ul.style.transform = 'translateX(' + translatex + ' px)';   加空格不能出现轮播效果
    ul.style.transform = 'translateX(' + translatex + 'px)';  // 移动端移动，使用translate 移动
  }, 2000);

  // 3. 无缝滚动
  // 过渡完成之后，再去判断 监听过渡完成的事件 transitionend  
  ul.addEventListener('transitionend', function() {
    // 3-1 无缝滚动
    if (index >= 3) {   
      index = 0;    // (第一张图片)
      ul.style.transition = 'none';     // 去掉过渡效果 让ul快速跳到目标位置
      var translatex = -index * w;      // 利用最新的索引号乘以宽度 去滚动图片
      ul.style.transform = 'translateX(' + translatex + 'px)';
    } else if (index < 0) {
      index = 2;
      ul.style.transition = 'none';
      var translatex = -index * w;       // 利用最新的索引号乘以宽度 去滚动图片
      ul.style.transform = 'translateX(' + translatex + 'px)';
    };

    // 3-2 小圆点跟随变化
    ol.querySelector('.current').classList.remove('current');  // 把ol里面li带有current类名的选出来去掉类名 remove
    ol.children[index].classList.add('current');               // 让当前索引号 的小li 加上 current   add
  });

  // 4. 手指滑动轮播图 
  var startX = 0;
  var moveX = 0;    // 后面会使用这个移动距离  要定义为全局变量
  var flag = false;
  // 4-1 触摸元素 touchstart： 获取手指初始坐标
  ul.addEventListener('touchstart', function(e) {    
    startX = e.targetTouches[0].pageX;  
    clearInterval(timer);     // 手指触摸的时候停止定时器
  });

  // 4-2 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
  ul.addEventListener('touchmove', function(e) {      
    moveX = e.targetTouches[0].pageX - startX;
    var translatex = -index * w + moveX;              // 移动盒子：  盒子原来的位置 + 手指移动的距离 
    ul.style.transition = 'none';                     // 手指拖动的时候，不需要动画效果要取消过渡效果
    ul.style.transform = 'translateX(' + translatex + 'px)';
    flag = true;         // 手指移动过我们再判断否则不做判断效果
    e.preventDefault();  // 阻止滚动屏幕的行为
  });

  // 4-3 手指离开 touchend：根据移动距离判断是回弹还是播放上一张下一张
  ul.addEventListener('touchend', function(e) {
    if (flag){
      // (1) 如果移动距离大于50像素播放
      if (Math.abs(moveX) > 50) {    
        if(moveX > 0) {
          index--;   // 右 正 上 减
        } else {
          index++;   // 左 负 下 加
        }
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
      } else {
        // (2) 如果移动距离小于50像素回弹
        var translatex = -index * w;
        ul.style.transition = 'all .1s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
      }
    };
    // 手指离开的时候重新开启定时器
    clearInterval(timer);
    timer = setInterval(function() {
      index++;
      var translatex = -index * w;
      ul.style.transition = 'all .3s';
      ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
  });

  
  // 返回顶部模块制作
  var goBack = document.querySelector('.goBack');
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset >= nav.offsetTop) {
      goBack.style.display = 'block';
    } else {
      goBack.style.display = 'none';
    }
  });
  goBack.addEventListener('click', function() {
    window.scroll(0,0);
  });
})


