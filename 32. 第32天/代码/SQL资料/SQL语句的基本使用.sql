-- 通过 * 把 users 表中所有的数据查询出来
-- select * from users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from users

--  向 users 表中，插入一条 username 为 tony stark，password 为 098123 的用户数据
-- insert into users (username, password) values ('tony stark', '098123')

-- select * from users

-- 将 id 为 4 的用户密码，更新成 888888
-- update users set password='888888' where id=4

-- select * from users

-- 把 users 表中 id 为 2 的用户密码和用户状态，分别更新为 admin123 和 1
-- update users set password='admin123', status=1 where id=2

-- select * from users

-- 删除 users 表中，id 为 4 的用户
-- delete from users where id=4

-- select * from users

-- 演示 where 子句的使用
-- select * from users where status=1
-- select * from users where id>=2
-- select* from users where username<>'ls'

-- 使用 AND 来显示所有状态为0且id小于3的用户
-- select * from users where status=0 and id<3

-- 使用 OR 来显示所有 status 为 1，或者 username 为 zs 的用户
-- select * from users where status=1 or username='zs'

-- 对 users 表中的数据，按照 status 字段进行升序排序
-- select * from users order by status 

-- 对 users 表中的数据，按照 id 字段进行降序排序
-- select * from users order by id desc

-- 对 users 表中的数据，先按照 status 字段进行降序排序，再按照 username 的字母顺序，进行升序排序
-- select * from users order by status desc, username asc

-- 使用 count(*) 查询 users 表中 status 为 0 的总数据条数：
-- select count(*) from users where status=0

-- 使用 AS 关键字,给查询出来的列名称设置别名
-- select count(*) as total from users where status=0
-- select username as uname,password as upwd from users




