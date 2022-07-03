const fs = require("fs");

// 读取文件
// (1) 回调函数形式
// fs.readFile("./resource/content.txt", "utf8", (err, dataStr) => {
// 	// 出错，抛出错误
// 	if (err) throw err;
// 	// 输出文件内容
// 	console.log(dataStr);
// });

// (2) Promise 形式做封装
const p = new Promise((resolve, reject) => {
	// 异步任务
	fs.readFile("./resource/content.txt", "utf8", (err, dataStr) => {
		// 出错
		if (err) reject(err);
		// 成功
		resolve(dataStr);
	});
});
// 调用 then方法分别指定resolved状态和rejected状态的回调函数。
p.then(
	value => {
		console.log(value);
	},
	error => {
		console.log(error);
	}
);
