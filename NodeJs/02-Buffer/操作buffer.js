// buffer与字符串的相互转换
let buffer = Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buffer.toString()); // utf-8

// buffer元素的读取
let buffer1 = Buffer.from('hello');
console.log(buffer1[0].toString(2)); // 01101000
buffer1[0] = 95;
console.log(buffer1.toString()); // _ello

// 溢出
let buffer2 = Buffer.from('hello');
buffer2[0] = 361; // 舍弃高位 0001 0110 1001 => 0110 1001 => 105
console.log(buffer2);

// 中文
let buffer3 = Buffer.from('你好');
console.log(buffer3); // <Buffer e4 bd a0 e5 a5 bd>