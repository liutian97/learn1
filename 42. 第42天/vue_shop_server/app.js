const express = require("express");
// (1-1) 导入 compression
const compression = require("compression");

// (2-1)  配置 HTTPS 服务
const https = require("https");
const fs = require("fs");
// (2-2) 配置项
const options = {
	cert: fs.readFileSync("./full_chain.pem"), // 密钥
	key: fs.readFileSync("./private.key"), // 私钥
};

// 创建 web 服务器
const app = express();

// (1-2) 启用中间件 compression
// (注意 ：) 一定写到 静态资源托管之前
app.use(compression());

// 托管静态资源
app.use(express.static("./dist"));

// // 启动 web 服务器
app.listen(80, () => {
	console.log("web server running at http://127.0.0.1");
});

// (2-3) 使用 http 创建服务器  443 是默认接口
// https.createServer(options, app).listen(443);
