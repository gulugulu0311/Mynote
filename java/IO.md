一个流可以理解为一个数据序列。输入流表示从一个源读取数据，输出流表示向一个目标写数据

## 读取控制台输入

Java的控制台输入由System.in完成。

创建BufferedReader的基本语法：

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
```

我们可以使用上述对象的**read()**方法从控制台读取**一个字符**，

或者用**readline()**方法读取**一个字符串**。

## 读写文件

FileInputStream	和	FileOutputStream

### FileInputStream

该流用于从文件读取数据。有多种方法可以用来创建对象。

可以使用字符串类型的文件名来创建一个输入流对象来读取文件。

```java
InputStream f = new FileStream("filepath")
```

也可以使用一个文件对象来创建一个输入流对象来读取文件。首先得使用File()方法来创建一个文件对象。

```java
File f = new File("file_path");
InputStream in = new FileInputStream(f);
```

### FileOutputStream

该类用来创建一个文件并向文件中写数据。

如果文件不存在，则会创建一个文件。

FileOutputStream对象由两种构造方法。与上述类似。