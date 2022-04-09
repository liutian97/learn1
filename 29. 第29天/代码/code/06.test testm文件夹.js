// 导入 testm 文件夹
require('./testm')

// 结果： 通过 package.json 加载了 a.js 文件
// 在被加载的目录下(testm)查找一个叫做 package.json 的文件，找 main 属性，作为 require() 加载的入口