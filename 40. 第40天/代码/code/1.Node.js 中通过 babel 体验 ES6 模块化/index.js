// 测试 能否通过 npx babel-node index.js 执行代码
// console.log('ok')


// (1) 默认导入 模块成员：import 接收名称 from '模块标识符'
// (2) 按需导入        ： import { 向外按需导出的变量名} from '模块标识符'
// (2-1) 可以用 as 为模块成员起别名
// import m1, { s1, s2 as ss2, say } from './m1'

// // 在终端进行测试 npx babel-node index.js
// console.log(m1);  // { a: 10, c: 20, show: [Function: show] }
// console.log(s1);  // aaa
// console.log(ss2); // ccc
// console.log(say); // [Function: say]


// (3) 直接导入并执行模块代码
// (注意：) 导入的文件名必须加 ./
import './m2.js' // 测试结果为 0 1 2




























// import m1, { s1, s2 as ss2, say } from './m1.js'

// console.log(m1)
// console.log(s1)
// console.log(ss2)
// console.log(say)


// import './m2.js'