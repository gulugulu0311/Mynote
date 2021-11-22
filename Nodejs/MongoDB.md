### 基本命令

连接

```shell
mongo
```

退出

```shell
exit
```



- **show dbs**
  - 查看显示所有数据库
- **db**
  - 查看当前操作的数据库
- **use 数据库名称**
  - 切换到指定的数据库（如果没有会新建）

### Nodejs中使用mongoDB

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

