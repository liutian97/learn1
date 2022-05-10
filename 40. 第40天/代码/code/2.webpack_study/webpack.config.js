/*
  webpack.config.js 是 webpack 的 配置文件
  所有构建工具都是基于 Node.js 平台运行的，模块化默认采用 CommonJS
  ① 模块分为 单文件模块 与 包
  ② 模块成员导出：module.exports 和 exports
  ③ 模块成员导入：require('模块标识符')

  (区分：src): src 是项目代码，使用 ES6模块化

*/

const path = require('path')  // 导入 node.js 中路径模块
// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',  // 指定要用到的模板文件
  filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
// 导入 vue-loader 的内置插件
// const VueLoaderPlugin = require('vue-loader/lib/plugin') // require 导入的是一个构造函数，在下面rules 的 plugins 需要 new 一个实例
// const { VueLoaderPlugin } = require('vue-loader/dist/index'); // require 导入'vue-loader'时，默认加载这个文件夹下的 package.json 文件中main 属性指向的文件
// const VueLoaderPlugin = require('vue-loader/dist/plugin') // 报错： TypeError: VueLoaderPlugin is not a constructor
const { VueLoaderPlugin } = require('vue-loader')





// 导出一个配置对象，将来webpack在启动的时候，会默认查找webpack.config.js，并读取这个文件中导出的配置对象，进行打包处理
module.exports = {
  // (1) mode 编译模式  (development | production)
  mode: 'development',
  // (2) entry/output 手动指定打包的入口与出口
  entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径  // __dirname 当前文件所处的目录，即项目的根目录（E:\web前端\lt前端学习\03-代码练习\40. 第40天\代码\code\2.webpack_study）  ./ 代表的是当前目录（src 是和 webpack.config.js 同级的目录）
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径  ./dist 代表 dist 文件夹 和 当前 webpack.config.js 是同级的目录
    filename: 'bundle.js', // 输出文件的名称
    // assetModuleFilename: 'img/[name].[hash:4][ext]' // 经过 Asset Modules 处理的输出文件存放路径
  },
  // 配置 开发服务器： 自动打包
  devServer: {
    static: {
      // 服务器从哪里提供内容
      // directory: path.join(__dirname, './dist') // 访问服务器页面显示dist目录下的bundle.js 和main.js
      directory: path.join(__dirname, '/') // 访问服务器页面显示 项目2.webpack_study的根目录（dist,node_modules,src,...webpack.config.js） 
    }
  },
  // (3) plugins 插件
  plugins: [htmlPlugin, new VueLoaderPlugin()], // plugins 数组是 webpack 打包期间会用到的一些插件列表
  // (4) loader 加载器
  module: {
    rules: [
      // test 表示匹配的文件类型， use 表示对应要调用的 loader
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }, //  \. 表示匹配.  $ 表示匹配以 css 结尾的文件类型
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // webpack4
      // {
      //   test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 16940,
      //       }
      //     },
      //   ],
      //   // type: 'javascript/auto'
      // },

      // 使用 webpack5 的 Asset Modules 解决
      // (1. asset/inline <=> webpack4 的 url-loader)
      // {
      //   test: /\.jpg|png|gif|bmp$/,
      //   type: 'asset/inline'  //  图片是base64格式
      // }

      // (2. asset <=> webpack4 的 有 limit 的 url-loader)
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        type: 'asset',
        // 配置  Rule.parser.dataUrlCondition.maxSize 来 选择是 asset/resouse 或 asset\inline
        parser: {
          dataUrlCondition: {
            maxSize: 16940  // // 导入图片的大小等于maxsize，采用asset/inline方式，图片路径显示base64格式。
            // maxSize: 16930, // 导入图片的大小为16940，比maxsize大，采用asset/resouse方式，将生成的图片img/1.f238.jpg存放在内存的项目根目录中，虚拟。
          },
        },
        // Rule.generator.filename 只对asset和asset/resource模块类型起作用。
        generator: {
          filename: 'img/[name].[hash:4][ext]' // 采用asset和asset/resource类型生成图片的存放路径
        }
      },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的 js 文件

      { test: /\.vue$/, use: 'vue-loader' },
    ]

  }
}