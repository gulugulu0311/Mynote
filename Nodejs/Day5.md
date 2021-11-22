## require方法加载规则

- 既不是核心模块，也不是路径形式的模块
- 先找到**当前文件所处目录**中的node_modules目录
- node_modules/art-template/package.json中的main属性
- main属性中就记录了art-template的入口模块
- 没有main属性则默认加载index.js
- 然后加载使用这个第三方包

## npm 常用命令

- npm init
  - npm init -y 可以跳过向导，快速生成
- npm install
  - 一次性把dependencies选项中的依赖项全部安装
- npm install 包名
  - 只下载
  - install i 包名
- npm install --save
  - 下载并且保存依赖项（package.json中的dependencies选项）
  - npm  i -S 包名
- npm uninstall
- npm --help

## Express

原生的http在某些方面表现不足以应对我们的开发需求，需要使用框架来加快开发效率，让代码高度统一

### 公开指定目录

```javascript
xxx.use('/public/', express.static('./public/'))
```

通过/public/xx的方式访问public目录下的所有资源了

## 文件操作路径和模块标识路径问题

- 文件操作中的相对路径可以省略 **./**
- 在模块加载中，相对路径的 **./** 不能省略

## 在Express中配置art-template

express约定把所有的视图文件都放到views中

```javascript
var express = require('express');
var app = express();

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// routes
app.get('/', function (req, res) {
    res.render('index.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});
```



## 在Express中获取表单post请求体数据

安装

```
npm install --save body-parser
```

配置

```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

## Express路由模块的提取

- 创建一个路由容器

  ```javascript
  let router = express.Router()
  ```

- 把路由都挂载到router路由容器里

  ```javascript
  router.get('/xxx', (req, res) = {
  //...
  })
  ```

- 把router导出

  ```javascript
  module.exports = router
  ```

- 把路由容器挂载到app

  ```javascript
  app.use(router)
  ```

  
