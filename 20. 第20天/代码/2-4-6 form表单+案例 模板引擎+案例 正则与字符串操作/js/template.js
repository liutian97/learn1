// (3) 封装template函数
function template(id, data) {
  var str = document.getElementById(id).innerHTML;
  // var str = $("#tpl-user").html()    // 15.html使用会报错（没有导入jquery.js）
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/;
  var patternResult = null;
  while (patternResult = pattern.exec(str)) {
    str = str.replace(patternResult[0], data[patternResult[1]]);
  }
  return str;
}
