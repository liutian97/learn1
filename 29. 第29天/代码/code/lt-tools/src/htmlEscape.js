// (2) 定义转义 HTML 的方法
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, (match) => { // 全局正则表达式进行匹配  | 是 或者
    switch (match) {
      case '<':
        return "&lt;"
      case '>':
        return "&gt;"
      case '"':
        return "&quot;"
      case '&':
        return "&amp;"
    }
  })
}

// (3) 定义还原 HTML 的方法
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}

// 向外共享
module.exports = {
  htmlEscape,
  htmlUnEscape
}