---
title: JS中的数据结构——链表(Linked-list)详解
date: 2022-01-12
permalink: /article/1641966796
categories:
  - 前端
tags:
  - js
---

海阔凭鱼跃，天高任鸟飞。Hey 你好！我是猫力 Molly

**之前看过这样一个问题“既然已经有数组了,为什么还要链表？”**

其实链表和数组各有千秋，都在不同的业务场景中发光发热，很多同学对链表可能是既熟悉又陌生。熟悉的是，我们在刷一些八股文的时候经常会看到“链表”这个字眼，陌生的是，我们在平时的开发中并不会太多的使用到链表。

那么我们就来带着问题了解一下啥是链表，既然已经有数组了,为什么还要链表？

## 数据结构的概念？

我们来把看起来晦涩难懂的专业术语拆分一下：

数据：对应的就是数据类型，在 js 中包含了**基本数据类型**和**引用数据类型**

结构：将一堆各种各样的数据按照不同的逻辑排列组合最终存储到计算机内存当中

> 总结：我们把数据的各种逻辑组成，在计算机中的存储结构以及各种操作的算法设计叫做数据结构

## 算法和数据结构的关系

**算法是建立在数据结构之上，对数据结构的操作需要用算法来描述；算法设计依赖数据的逻辑结构，算法的实现依赖数据的存储结构**

- 常见的数据结构

数组、字典、链表、栈、队列、散列表、二叉树、堆、跳表、图、Trie 树

- 常见的算法

递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算法、动态规划、字符串匹配算法等

## 什么是数组结构

### 1. 数组的定义

数组是若干个元素按照顺序排列存放的一个集合，并且每个元素至少存在一个 **索引(index)** 或者 **关键字(key)** 所标识，每个元素的位置都可以通过计算索引拿到

为什么说每个元素至少有一个索引呢，那是因为数组可以是多维度的

但是我们在日常工作中一般常用的是一维数组，也可以称之为 **线性数组**

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7123d959295043559139f9068a32a199~tplv-k3u1fbpfcp-watermark.image?)

```js
一维数组：[1,2,3];  //数组的每一个元素是一个数据类型

二维数组：[["a","b","c"],[1,2,3],123];  //数组的每一个元素是一个一维数组

三维数组：[[["a","b","c"],[1,2,3]],[["a","b","c"],[1,2,3]]];  //数组的每一个元素是一个二维数组
```

### 2. 数组的优缺点

数组作为我们工作中最为常见的一种数据结构，其最大的特性莫过于高效的 **查询** 数据

但是其缺点也是非常的明显，在进行 **插入** 和 **删除** 数据时，需要进行大量的数据移动补位消耗大量的时间

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7f1e08884e2410a948df425d64d079e~tplv-k3u1fbpfcp-watermark.image?)

## 什么是链表结构

### 1. 链表的定义

链表结构其实是内存内部的一种存储方式，链表则是把一系列节点串联起来，每个节点上至少包含两个部分： **数据域** 与 **指针域**

数据：保存数据

指针：指向下一个节点的引用

链表中的每个节点，通过指针域的值，形成一个线性结构

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e102c23e614d48adbdd4a24c89cc0c0f~tplv-k3u1fbpfcp-watermark.image?)

### 2. 链表的优缺点

因为链表是一种 **松散** 的结构体，所以当你想要找到其中的某一个节点时，只能够从 **头节点** 一级一级的往下找，但也因为这种松散的结构使得其进行 **插入** 和 **删除** 时只需要改变其 **指针域** 的指向即可

优点：适合动态插入和删除的应用场景 缺点：不能快速的定位和随机访问数据

### 数组和链表的对比总结

- 数组和链表都是线性数据结构
- 数组为静态结构，静态分配内存。链表支持动态分配内存
- 数组在数据储存时是一段连续的内存空间，链表是非连续的通过指针来串联
- 数组可以根据下标定位快速查找，链表则需要遍历查找
- 数组在插入和删除时会有大量的数据移动补位，链表只需要改变指针指向

## js 中链表的实现

不同于`new Array()`、`new Set()`、`new Map()`等数据结构，目前`js`官方还没有为我们提供一个直接的`链表API`实现。不过我们可以通过对象的方式去模拟出一个`链表`

链表可以分为三类：

- 单向链表：线型数据结构，指针指向下一个节点，终点指向 null
- 双向链表：可以往前或者往后添加节点，指针指向前一个节点和后一个节点
- 循环链表：循环链表的第一个节点指向最后一个节点，最后一个节点指向第一个节点（循环链表又可以划分为“单向循环链表”和“双向循环链表”）

对象化链表之后，链表的呈现是这个样子

```js
// 链表对象化，便于理解
const obj = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null,
    },
  },
};
```

### 链表的插入

当我们需要向链表中插入一个节点时，只需要将需要插入地方的 **上一个节点** 指向自己，并且将 **当前节点** 指向下一个节点就完成了

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84b05b9782284d85979500842a934d53~tplv-k3u1fbpfcp-zoom-1.image)

### 链表的删除

当我们想要删除链表中一个节点时，只需要将目标节点的 **上一个节点** 指向当前节点的 **下一个节点** ，并且将目标节点指向到`null`完成释放，就可以完成一个删除操作

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/585a6d469f2442fc81944c761d84ffca~tplv-k3u1fbpfcp-zoom-1.image)

## 实现一个单向链表

```js
class neNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 实现一个单项链表
class singleLinkedList {
  constructor() {
    this.head = null;
  }
  // 添加节点
  add(data) {
    let node = new neNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  // 插入节点
  insert(data, target) {
    let node = new neNode(data);
    let current = this.head;
    while (current.next) {
      if (current.data === target) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }
  // 查找节点
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  // 删除节点
  remove(data) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }
}
const list = new singleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.insert(4, 2);
console.dir(list, { depth: null });
```

打印结果为：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afd54d542d104e379dd5fbecf559e7d7~tplv-k3u1fbpfcp-watermark.image?)
