// 1.引入fs
const fs = require('fs');

// 2.追加写入
fs.appendFile('./座右铭.txt','择其善者而从之',err => {
    if(err) throw err;
    console.log('文件追加写入成功');
})

// 同步追加写入
fs.appendFileSync('./data.txt','择其善者而从之');

// writeFile实现追加写入
fs.writeFile('./座右铭.txt','择其善者而从之',{flag:'a'},err => {
    if(err) throw err;
    console.log('文件追加写入成功');
})