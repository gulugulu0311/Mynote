### json模块：

- loads()：将json数据转换为dict数据
- dumps()：将dict数据转换为json数据
- load()：读取json文件数据，转换为dict数据
- dump()：将dict数据转换为json数据后写入json文件

load()：

```python
with open('1.json','r') as f:
    dict = json.load(f)
```

dump()：

```python
with open('1.json','w') as f:
    json.dump(dict, f)	#会在目录下生成一个1.json 的文件，文件内容是dict数据转换成的json数据
```
