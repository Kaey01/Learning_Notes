/**
 * 需求：
 * 新建一个文件，座右铭.txt,写入内容：三人行，必有我师焉
 * */

// 1.引入fs模块
const fs = require('fs');

// 2.写入文件
fs.writeFile('./座右铭.txt','三人行，必有我师焉',err => {
    if(err) throw err;
    console.log('文件写入成功');
})


// 同步写入
fs.writeFileSync('./data.txt','三人行，必有我师焉');