// util.promisify() 错误优先的回调风格的函数（也就是将 (err, value) => ... 回调作为最后一个参数），并返回一个返回 promise 的版本。
// 导入 util 模块
const util = require("util");
// 导入 fs 模块
const fs = require("fs");
// 返回一个返回 promise 的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile("./resource/content.txt").then(value => {
	// console.log(value); // <Buffer 50 72 6f 6d 69 73 65 20 e6 98 af e5 bc 82 e6 ad a5 e7 bc 96 e7 a8 8b e7 9a 84 e4 b8 80 e7 a7 8d e8 a7 a3 e5 86 b3 e6 96 b9 e6 a1 88 2e>
	console.log(value.toString());
});
