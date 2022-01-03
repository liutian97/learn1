function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if(obj.offsetLeft == target) {
      clearInterval(obj.timer);
      // 回调函数写到定时器结束里面
      // if (callback) {
      //   callback(); 
      // } 
       // 如果有参数传入，callback为true，则调用callback();如果没有参数传入，callback为false，结束
      callback && callback();  // 短路
    }
    obj.style.left = obj.offsetLeft + step + 'px';
  }, 15);
}
