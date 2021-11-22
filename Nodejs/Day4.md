## module.exports和exports的区别

在Node中，每个模块内部都有一个自己的module对象，该module对象中，有一个成员叫exports也是一个对象，如果需要对外导出成员，只需要把导出的成员挂载到**module.exports**中

Node为了简化操作，专门提供了一个变量：exports等于module.exports

也就是说在模块中有这么一行代码：

```javascript
var exports = module.exports //注意引用
```

当一个模块需要导出单个成员的时候，直接给exports赋值是不管用的，给exports赋值会断开和module.exports之间的引用，同理，给module.exports重新赋值也会断开

默认在代码的最后有一句：

```javascript
return module.exports
```

## 加载规则

优先从缓存加载，重复加载只会拿到其中的接口对象
