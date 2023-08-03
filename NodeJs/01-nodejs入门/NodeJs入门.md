# 为什么要学习Node.js
- 可以让其他人访问我们编写的网页
- 为后续的框架学习打基础
# 什么是Node.js
- Node.js® is an open-source, cross-platform JavaScript runtime environment. --- https://nodejs.org/en
- 通俗来讲：Node.js就是一款应用程序，是一款软件，它可以运行JavaScript代码
# Node.js的作用
1. 开发服务器应用
2. 开发工具类应用
3. 开发桌面端应用
# Node.js的安装
- 官网下载：https://nodejs.org/en/download/
- 历史版本：https://nodejs.org/en/download/releases/
- 安装完成后，打开命令行工具，输入node -v，如果出现版本号，则安装成功
#  Node.js的使用
- 打开命令行工具，输入node，进入node环境
- 输入console.log('hello world')，回车，出现hello world，则node环境搭建成功
- 输入exit，退出node环境
- 命令行工具中，输入node 文件名，回车，即可运行文件  
  `node helloWorld.js`
# Node.js的注意事项
1. Node.js中不能使用DOM和BOM的API，可以使用console和定时器API
2. Node.js中的顶级对象为global，也可以用globalThis访问顶级对象