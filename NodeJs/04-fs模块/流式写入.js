/**
 * 观书有感.txt
 */

// 1.引入fs模块
const fs = require('fs');

// 2.创建可写流
const ws = fs.createWriteStream('./观书有感.txt');

// 3.write
ws.write('观书有感\r\n');
ws.write('床前明月光\r\n');
ws.write('疑似地上霜\r\n');

// 4.关闭流
ws.close();