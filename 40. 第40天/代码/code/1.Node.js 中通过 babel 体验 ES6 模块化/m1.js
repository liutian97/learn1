// 当前文件模块为 m1.js

// 定义私有成员 a 和 c
let a = 10
let c = 20
// 外界访问不到变量 d ,因为它没有被暴露出去
let d = 30

// 定义函数
function show() {
  console.log('1')

}
// (1) 默认导出：export default 默认导出的成员
// 将本模块中的私有成员暴露出去，供其它模块使用
export default {
  a,
  c,
  show
}

// (2) 按需导出: export 
// (注意：) 每个模块中，可以使用多次按需导出
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
  console.log('hi');
} 



// (注意1：) 每个模块中，只允许使用唯一的一次 export default，否则会报错！
// export default {
//   d
// }
// (注意2：) 如果不导出任何模块，执行 npx babel-node index.js 命令后，不会报错，结果为 空对象{}


























// let a = 10
// let c = 20
// let d = 30

// function show() {
//   console.log('1111111111111')
// }

// export default {
//   a,
//   c,
//   show
// }

// export let s1 = 'aaa'
// export let s2 = 'ccc'
// export function say() {
//   console.log('ooooooooo')
// }

// // export default {
// //   d
// // }
