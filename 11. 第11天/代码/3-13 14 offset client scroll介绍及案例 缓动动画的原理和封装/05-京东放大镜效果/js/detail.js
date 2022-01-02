window.addEventListener('load', function() {
  var preview_img = document.querySelector('.preview_img');
  var mask = document.querySelector('.mask');
  var big = document.querySelector('.big');
  // 1. 鼠标经过 preview_img 显示和隐藏 mask 遮挡层 和 big 大盒子
  preview_img.addEventListener('mouseover', function() {
    mask.style.display = 'block';
    big.style.display = 'block';
  });
  preview_img.addEventListener('mouseout', function() {
    mask.style.display = 'none';
    big.style.display = 'none';
  });

  // 2. 鼠标移动，让mask 遮挡层跟着鼠标走
  // mask遮挡层的坐标不是鼠标坐标，而是mask遮挡层在preview_img盒子内的坐标
  preview_img.addEventListener('mousemove', function(e){
    // 2-1  计算鼠标在盒子内的坐标
    var e = e || window.event;
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    // 2-2  计算遮挡层的left 和top值
    // 2-3 mask 移动的距离   
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    // 2-4 遮挡层不能超出小图片盒子范围
    var maskMax = this.offsetWidth - mask.offsetWidth;
    if (maskX <= 0) {
      maskX = 0; 
    } else if (maskX >= maskMax) {
      maskX = maskMax;
    };
    if (maskY <= 0) {
      maskY = 0; 
    } else if (maskY >= maskMax) {
      maskY = maskMax;
    };
    // 遮挡层的left 和top值
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    // 3.  移动黄色遮挡层，大图片跟随移动功能。
    // 大图片移动距离 = 遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
    var bigImg = document.querySelector('.bigImg');
    // 3-1 大图片最大移动距离
    var bigMax = bigImg.offsetWidth - big.offsetWidth;
    // 3-2 大图片的移动距离 X Y
    var bigX = maskX * bigMax / maskMax;
    var bigY = maskY * bigMax / maskMax;
    // 3-3 大图位置
    bigImg.style.left = -bigX + 'px';
    bigImg.style.top = -bigY + 'px';
  });
});

// window.onload = function() {
//   var preview_img = document.querySelector('.preview_img');
//   var mask = document.querySelector('.mask');
//   var big = document.querySelector('.big');
//   preview_img.addEventListener('mouseover', function() {
//     mask.style.display = 'block';
//     big.style.display = 'block';
//   });
//   preview_img.addEventListener('mouseout', function() {
//     mask.style.display = 'none';
//     big.style.display = 'none';
//   });
//   preview_img.addEventListener('mousemove', function(e) {
//     var e = e || window.event;
//     var x = e.pageX - this.offsetLeft;
//     var y = e.pageY - this.offsetTop;
//     var maskX = x - mask.offsetWidth / 2;
//     var maskY = y - mask.offsetHeight / 2;
//     var maskMax = this.offsetWidth - mask.offsetWidth;
//     if (maskX <= 0) {
//       maskX = 0;
//     } else if (maskX >= maskMax) {
//       maskX = maskMax;
//     };
//     if (maskY <= 0) {
//       maskY = 0;
//     } else if(maskY >= maskMax) {
//       maskY = maskMax;
//     };
//     mask.style.left = maskX + 'px';
//     mask.style.top = maskY + 'px';

//     var bigImg = document.querySelector('.bigImg');

//     var bigMax = bigImg.offsetWidth - big.offsetWidth;
//     var bigX = maskX * bigMax / maskMax;
//     var bigY = maskY * bigMax / maskMax;
//     bigImg.style.left = -bigX + 'px';
//     bigImg.style.top = -bigY + 'px';
//   });
// };

