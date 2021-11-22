### 集合中主要接口的概述

数组的长度是固定的，集合的长度是可变的；数组用来存储**基本数据类型**的数据，集合用来存放**类对象**的引用。

## List集合

List集合为列表类型，列表的主要特征是以**线性方式**存储对象。

List接口提供的适合于自身的常用方法均与**索引**有关，这是因为List集合为列表类型，以**线性方式**存储对象，可以通过对象的索引操作对象。

List接口的常用实现类有**ArrayList**和**LinkedList**。

在使用List集合时，通常情况下，声明为List类型。实例化时，根据实际情况的需要为ArrayList或LinkedList。

### ArrayList类

```java
List<String> list = new ArrayList<String>();
```

ArrayList类实现了List接口，由ArrayList类实现的List集合采用**数组结构**保存对象。

数组结构的优点是便于对集合进行快速的随机访问，如果经常需要根据索引位置访问集合中的对象，使用由ArrayList类实现的List集合的效率较好。

### LinkedList类

```java
List<String> list = new LinkedList<String>();
```

LinkedList类实现了List接口，由LinkedList类实现的List集合采用**链表结构**保存对象。

链表结构的优点是便于向集合中插入和删除对象，如果经常需要向集合中插入对象，或者从集合中删除对象，使用由LinkedList对象类实现的List集合的效率较好。

## Set集合

Set集合为**集**类型。集是最简单的一种集合，存放于集合中的对象不按特定方式排序，只是简单地把对象加入集合中。

对集中存放的对象的访问和操作是通过**对象的引用**进行的，所以，**在集中不能存放重复对象**。

### HashSet类

由HashSet类实现的Set集合的优点是**能快速定位集合中的元素**

由HashSet类实现的Set集合中的对象必须是唯一的，所以需要重新实现***equals()***方法，从而保证插入集合中对象的标识的唯一性。

由HashSet类实现的Set集合按照哈希码排序，所以需要重新实现***hashCode()***方法，从而保证插入集合中的对象能够合理地分布在集合中，以便快速定位集合中的对象。

### TreeSet类

TreeSet类不仅实现了Set接口，还实现了java.util.SortedSet接口，从而保证**在遍历集合时按照递增的顺序获得对象**。

TreeSet类通过实现java.util.SortedSet接口增加的方法有*comparator()，first()，last()，headSet(E toElement)，subSet(E fromElement, E to Element)，tailSet(E fromElement)*。

## Map集合

Map集合为**映射类型**，映射中的每个对象都是成对存在的。

映射中存储的每个对象都有一个相应的键（key），在检索对象时必须通过相应的键对象来获取值（value）对象，所以，**要求键对象必须是唯一的**。

键对象还决定了对象在映射中的存储位置，但并不是由键对象本身决定的，需要通过一种**散列技术**进行处理。

Map接口的常用实现类由**HashMap**和**TreeMap**。

### HashMap类

HashMap通过哈希码对其内部的映射关系进行快速查找，由HashMap类实现的Map集合对于**添加和删除**映射关系更有效。

在使用HashMap类实现的Map集合时，需要重写作为主键对象类的*hashCode()*，重写的基本原则：

1. 不唯一原则。
2. 分散原则。





