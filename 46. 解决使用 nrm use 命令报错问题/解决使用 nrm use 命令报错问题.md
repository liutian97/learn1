### 【46. 解决使用 nrm use 命令报错问题】

##### 1. 场景及报错

安装了 nrm ，使用 nrm use taobao  修改镜像时，发生错误。

> 报错图如下：

![](E:\web前端\lt前端学习\02-代码练习\46. 解决使用 nrm use 命令报错问题\images\使用命令报错图.png)



##### 2. 报错原因：

> **语法使用的错误。**

##### 3. 解决方案：

> 找到对应文件，进行代码修改。
>
> ![](E:\web前端\lt前端学习\02-代码练习\46. 解决使用 nrm use 命令报错问题\images\查找文件.png)
>
> 将 
>
> ```JavaScript
> const open = require('open');
> 
> 
> // 修改为
> const open = import('open');
> ```
>
> 如下图：![](E:\web前端\lt前端学习\02-代码练习\46. 解决使用 nrm use 命令报错问题\images\修改语法.png)

> 再次输入命令：
>
> ![](E:\web前端\lt前端学习\02-代码练习\46. 解决使用 nrm use 命令报错问题\images\解决报错.png)