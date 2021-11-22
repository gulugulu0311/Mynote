## What is Nodejs?

(nodejs.org)

- Nodejs 是一个JavaScript运行时环境(JavaScript runtime)

- 可以解析和执行JavaScript代码

- 实现脱离浏览器来运行JavaScript代码

  ### 浏览器中的JavaScript

  - EcmaScript
  - BOM
  - DOM

  ### Nodejs中的JavaScript

  - 无BOM、DOM
  - EcmaScript
  - 提供一些服务器级别的操作api
    - 文件读写
    - 网络服务的构建
    - 网络通讯
    - http服务器
    - 。。。

- event-driven 事件驱动

- non-blocking I/O model 非阻塞IO模型(异步)

- 轻量和高效

- npm是世界上最大的开源库生态系统

------



## What can Nodejs do?

- Web 服务器后台
- 命令行工具
  - npm(node)
  - git(C)
  - hexo(node)

- 前端主要用到它的命令行工具



Node中的JavaScript具有文件操作的能力

- 引入fs(file-system)模块

1. 使用require方法加载fs核心模块 
2. 读取文件(url,回调函数function(error,data){})

------



## 使用Node构建Web服务器

- 核心模块:http

1. 加载http核心模块

   - ```javascript
     let http = require('http')
     ```

2. 使用http.createServer()方法创建一个Web服务器

   - ```javascript
     let serve = http.createServer()
     ```

3. 注册request请求事件,当客户端请求过来，就会自动出发服务器的request请求事件，然后执行第二个参数：回调处理函数

   - ```javascript
     server.on('request',(request,response) => {
         //...
     })
     ```

4. 绑定端口号，启动服务器

   - ```javascript
     server.listen(8088,() =>{
         console.log('服务器启动成功,可通过http://127.0.0.1:8088/访问');
     })
     ```

#### 发送响应

​	response对象有一个write方法可以用来给客户端发送响应数据，最后一定要使用end来结束响应

```javascript
server.on('request',(request,response) => {
    console.log('收到客户端请求了,请求路径是:' + request.url);

    if(request.url == '/index'){
        response.end('index page')
    }
    else if (request.url == '/about'){
        response.end('about page')
    }
    else if (request.url == '/product'){
        response.end(JSON.stringify(data))
    }
})
```

响应内容只能是二进制数据或者字符串(JSON.stringify(data))