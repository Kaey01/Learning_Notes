# Buffer（缓冲器）
## 1.概念
Buffer中文译为【缓冲区】，是一个类似于Array的对象，用于表示固定长度的字节序列。换句话说，Buffer是用来存放二进制数据的容器。
## 2.作用
Buffer的作用是用来处理二进制数据流，比如TCP流、文件流、网络流等，它是对这些数据的缓冲区。
## 3.使用
### 3.1.创建Buffer
#### 3.1.1.通过new关键字创建
```javascript
// alloc
let buffer = Buffer.alloc(10);

// allocUnsafe
let buffer1 = Buffer.allocUnsafe(10);

// from
let buffer2 = Buffer.from('hello');
let buffer3 = Buffer.from([1,2,3]);
```
## 4.操作buffer
### 4.1操作
```javascript
// buffer与字符串的相互转换
let buffer = Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buffer.toString()); // utf-8

// buffer元素的读取
let buffer1 = Buffer.from('hello');
console.log(buffer1[0].toString(2)); // 01101000
buffer1[0] = 95;
console.log(buffer1.toString()); // _ello
```
### 4.2注意事项
```javascript
// 溢出
let buffer2 = Buffer.from('hello');
buffer2[0] = 361; // 舍弃高位 0001 0110 1001 => 0110 1001 => 105
console.log(buffer2);

// 中文
let buffer3 = Buffer.from('你好');
console.log(buffer3); // <Buffer e4 bd a0 e5 a5 bd>
```