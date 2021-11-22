## CentOS 后台运行、关闭和查看后台任务

### nohup

```shell
nohup python -u filename.py > logname.log 2>&1 &
```

nohup：不挂起的意思

python filename.py：python运行filename.py文件

-u：代表程序不启动缓存，也就是把输出直接放到log中，没这个参数的话，log文件的生成会有延迟

logname.log 将输出日志保存到这个log文件中

2>1	2与>结合代表错误重定向，而1则代表错误重定向到一个文件1，而不代表标准输出；

2>&1   换成2>&1，&与1结合就代表标准输出了，就变成错误重定向到标准输出.

&		最后一个& ，代表该命令在后台执行

### 查看后台运行的程序

有两个命令可以用，jobs和ps的区别在与jobs用于查看当前终端后台运行的任务，换了终端就看不到了。而ps命令用于查看瞬间进程的动态，可以看到别的终端运行的后台程序

```shell
ps -aux|gerp python
```

u:以用户为主的格式来显示  x:显示所有程序，不以终端机来区分