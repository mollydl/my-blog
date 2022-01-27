---
title: 重读红宝书之JavaScript的历史回顾与组成
date: 2022-01-27
permalink: /article/1643292590
categories:
  - 重读红宝书
tags:
  - js
---

海阔凭鱼跃，天高任鸟飞。Hey 你好！我是猫力 Molly

> 温故而知新，可以为师矣。重读红宝书（第四版）系列文章意在对 JS 知识点复盘整理、查漏补缺，构建自己的前端知识体系。该系列会以自己的理解将红宝书的各个章节知识点整理为文章并发布出来。喜欢的小伙伴欢迎加入我们，让我们一起重读红宝书，温故知新。

## 简短的历史回顾

- **JavaScript**于 1995 年由网景公司一位名叫**Brendan Eich**的工程师研发诞生，初衷是解决当下为验证简单的表单而需要大量与服务器的往返通信的痛点。
- 为了赶上发布时间，网景与 Sun 公司结为开发联盟，共同完成 `LiveScript` 的开发。就在 **Netscape Navigator 2** 正式发布前，网景把 `LiveScript` 改名为 `JavaScript`，以便搭上媒体当时热烈炒作 `Java` 的顺风车。
- `JavaScript1.0`发布后，取得巨大成功。网景公司稳居市场领导者位置。同一时间段，微软坐不住了，决定向**IE**投入更多资源，不久便发布了**IE3**并对`JavaScript`有了新的实现语言名为`JScript`
- 由于微软的强势加入，此时市面上存在两个版本的`JavaScript`，急需将其规范化，标准化
- 1997 年，`JavaScript 1.1` 作为提案被提交给欧洲计算机制造商协会（ECMA）。之后改组织发布`ECMAScript`成为了新的脚本语言标准
- 1998 年，国际标准化组织（ISO）和国际电工委员会（IEC）也将 `ECMAScript` 采纳为标准（ISO/IEC-16262）。自此以后，各家浏览器均以 `ECMAScript` 作为自己 `JavaScript` 实现的依据

## JavaScript

完整的`JavaScript`应该包含三部分内容

1. 核心（ECMAScript）
2. 文档对象模型（DOM）
3. 浏览器对象模型（BOM）

他们处于一个包含关系

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58fe4854714146dd9deb99ac53fdb4d8~tplv-k3u1fbpfcp-watermark.image?)

### ECMAScript

`ECMAScript`作为一门脚本语言，并不局限于 web 浏览器，而是作为一个基准来定义，可以在其之上再构建更稳定的脚本语言。web 浏览器只是作为`ECMAScript`实现的一种**宿主环境**，其他的宿主环境还有服务器端`JavaScript`平台`Node.js`

抛开浏览器部分，`ECMAScript`在基本层面描述了这门语言的如下部分：

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 全局对象

### DOM

`dom`表示**文档对象模型**，用于操作`html`页面节点

一段`html`代码最终会体现为一颗`dom`树。例如：

```html
<html>
  <head>
    <title>molly</title>
  </head>
  <body>
    <p>I'm Molly</p>
    <h1>Hello World!</h1>
  </body>
</html>
```

如上代码通过`DOM`可以表示为：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad024b4ea5304e1397b3796c59644dd9~tplv-k3u1fbpfcp-watermark.image?)

通过操作`dom api`，我们可以轻松的实现节点的增删改查以及鼠标键盘的用户交互事件

### BOM

`bom`表示**浏览器对象模型** 用于支持访问和操作浏览器的窗口

`html5`规范了`bom`的相关标准与特性，整体来说，`bom`主要针对浏览器窗口和拓展，例如：

- 弹出新浏览器窗口的能力
- 移动、缩放和关闭浏览器窗口的能力
- `navigator`对象，提供关于浏览器的详情信息
- `location`对象，提供浏览器加载页面详情信息
- `screen`对象，提供关于用户屏幕分辨率详情信息
- ...

## 总结

JavaScript 是一门用来与网页交互的脚本语言，主要由三部分组成

- `ECMAScript`：定义并提供核心功能实现
- `dom`：提供与网页内容交互的`api`
- `bom`：提供与浏览器交互的`api`
- 目前以上三部分内容都得到了大部分浏览器不同程度的支持，所有浏览器对于`es5`提供了完善支持，而对于`es6+`也在不断支持。时代在发展，科技在进步，让我们摒弃`ie`拥抱`Chrome`吧

## 感谢

欢迎关注我的个人公众号[前端有猫腻](https://getapi.run/recommend/yy/1.jpg)每天给你推送新鲜的优质好文。回复 “福利” 即可获得我精心准备的前端知识大礼包。愿你一路前行，眼里有光！

该系列持续更新中，喜欢的小伙伴欢迎加入我们，让我们一起重读红宝书，温故知新。[微信：猫力 molly](http://tool.edian.xyz)
