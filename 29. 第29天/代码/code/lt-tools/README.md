## 安装
```
npm install lt-tools
```

## 导入
```js
const lt = require('lt-tools')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = lt.dateFormat(new Date());
// 结果  2022-04-04 10:38:36
console.log(dtStr);
```

## 转义 HTML 中的特殊字符串
```js
// 带转化的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标题<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转化
const str = lt.htmlEscape(htmlStr);
// 转换的结果  &lt;h1 title=&quot;abc&quot;&gt;这是h1标题&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 中的特殊字符
```js
// 待还原 HTML 字符串
const str2 = lt.htmlUnEscape(str);
// 输出的结果  <h1 title="abc">这是h1标题<span>123&nbsp;</span></h1>
console.log(str2);
```

## 开源协议
ISC