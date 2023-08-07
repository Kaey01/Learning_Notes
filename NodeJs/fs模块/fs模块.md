# fs模块
fs模块可以实现与硬盘的交互例如文件的创建、删除、重命名、移动，还有文件内容的写入、读取，以及文件夹的相关操作

## fs异步与同步

## 追加写入
```javascript
fs.appendFile(file, data,[options], callback)
```
同步方法
```javascript
fs.appendFileSync(file, data,[options])
```
writeFile实现追加写入
```javascript
fs.writeFile(file, data, {flag: 'a'}, callback)
```

## 流式写入
```javascript
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
writerStream.on('finish', function() {
    console.log("写入完成。");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});
```