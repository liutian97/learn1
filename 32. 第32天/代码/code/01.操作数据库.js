// (1) 导入 mysql 模块
const mysql = require('mysql')
const { CLIENT_MULTI_RESULTS } = require('mysql/lib/protocol/constants/client')

// (2) 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})

// (3) 测试 mysql 模块能否正常工作
// db.query('select 1', (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message)
//   // 能够成功执行 SQL 语句
//   console.log(results); // [RowDataPacket { '1': 1 }]
// })

// (4) 查询 users 表中的所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//   if (err) return console.log(err.message);
// (注意): 如果执行的是 select 查询语句， 则执行的结果是数组
//   console.log(results);
// })

// (5)　向 users 表中新增数据， 其中 username 为 Spider-Man，password 为 pcc321
// // (5-1) 定义要插入到表中的数据对象
// const user = { username: 'Spider - Man', password: 'pcc321' }
// // (5-2) 定义待执行的 SQL 语句
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// // (5-3) 执行 SQL 语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   if (err) return console.log(err.message);
//   // 成功了
//   // (注意)：如果执行的是 insert into 插入语句，则 results 是一个对象
//   // 通过 affectedRows 属性，来判断是否插入数据成功
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功！')
//   }
// })

// (6) 插入数据的便捷方式
// const user = { username: 'Spider - Man2', password: 'pcc4321' }
// // 直接用 set ? 代替使用多个 ? 进行占位
// const sqlStr = 'insert into users set ?'
// // 直接将数据对象当作占位符的值
// db.query(sqlStr, user, (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功！');
//   }
// })

// (7) 更新数据
// 定义要更新的新数据
// const user = { id: 6, username: 'aaa', password: '000' }
// const sqlStr = 'update users set username=?,password=? where id=?'
//  使用数组依次为占位符指定具体的值
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   if (err) console.log(err.message);
//   // 注意：执行 update 语句的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
//   if (results.affectedRows === 1) {
//     console.log('更新数据成功！');
//   }
// })

// (8) 更新数据的便捷方式
// const user = { id: 6, username: 'aaaa', password: '0000' }
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if (err) console.log(err.message);
//   if (results.affectedRows === 1) {
//     console.log('更新数据成功！')
//   }
// })

// (9) 删除数据
// 删除 id=5 的用户
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 5, (err, results) => {
//   if (err) console.log(err.message);
//   // 注意：执行 delete 语句之后，结果也是一个对象，包含 affectedRows 属性
//   if (results.affectedRows === 1) {
//     console.log('删除数据成功！')
//   }
// })

// (10) 标记删除
// 标记删除 id=6 的用户（status设为1）
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log('标记删除成功！')
  }
})








