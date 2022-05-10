/* 使用 ES6模块化 实现index.html 页面的功能
    ES6模块化规范中定义：
    ① 每个 js 文件都是一个独立的模块
    ② 导入模块成员使用 import 关键字
    ③ 暴露模块成员使用 export 关键字
*/

// 使用模块化的方式 导入jquery
import $ from 'jquery'  // ES6 的模块化语法，浏览器不识别，存在JavaScript的兼容性问题，所以报错。解决方案：配置 webpack, 将代码做转换再运行。
import './css/1.css'    // 直接导入并执行模块代码
import './css/1.less'
import './css/1.scss'




// jQuery 的入口函数
$(function () {
  // 实现隔行变色效果
  $('li:odd').css('backgroundColor', '#bfa') // 奇数行
  $('li:even').css('backgroundColor', '#bcf') // 偶数行
})

// 定义一个 Person 类 （js 的高级语法）
class Person {
  static info = 'aaa' // 静态属性
}

console.log(Person.info);

// ---------------------
// webpack 项目中使用 vue2

// 1. 导入 Vue 构造函数
// vue2 中vue 的挂载方式
// import Vue from 'vue'
// // 2. 导入 App 根组件
// import App from './components/App.vue'
// const vm = new Vue({
//   // 3. 指定 vm 实例要控制的页面区域
//   el: '#app',
//   // 4. 通过 render 函数，把指定的组件渲染到 el 区域中
//   render: h => h(App)
// })

// webpack 项目中使用 vue3

// 1. 导入 Vue 构造函数
// vue3 中vue 的挂载方式
import { createApp } from 'vue'
// 2. 导入 Vue 根组件
import App from './components/App.vue'
// 通过 mount 函数 渲染
createApp(App).mount('#app')


