## 核心模块

node提供很多服务器级别的 API，其大多数呗包装到了一个具名的核心模块中：

- 文件操作——fs
- http服务构建——http
- 路径操作模块——path
- 操作系统信息模块——os
- 。。。

```javascript
var fs = require('fs')
var http = require('http')
//...
```

## 模块系统

require是一个方法，用于加载模块。Node中模块有三种：具名的核心模块，如fs、http；用户自己编写的文件模块。

require方法有两个作用：

- 加载文件模块并执行里面的代码
- 拿到被加载文件模块导出的接口对象

在每个文件模块中都提供了一个对象：exports 默认是一个空对象

Node中没有全局作用域，只有模块作用域。

```javascript
//要导出的文件B

exports.XXX = ''

//文件A中使用

let foo = require('./B')
console.log(foo.XXX)
```

## IP地址和端口号的概念

所有联网的程序都需要进行网络通信，计算机中只有一个物理网卡，而且同一个局域网中，网卡的地址必须是唯一的。

网卡是通过唯一的ip地址进行定位的

IP地址用来定位计算机，端口号用来定位具体的应用程序（所有需要联网通讯的软件都必须具有端口号）

端口号的范围：0 ~ 65536 之间

### 响应内容类型——Content-type

```javascript
response.setHeader('Content-Type', 'text/plain;charset=utf-8')
```

[oschina]: http://tool.oschina.net/

