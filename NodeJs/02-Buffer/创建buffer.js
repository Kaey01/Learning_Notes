// alloc
let buffer = Buffer.alloc(10);
console.log(buffer)

// allocUnsafe
let buffer1 = Buffer.allocUnsafe(10);
console.log(buffer1)

// from
let buffer2 = Buffer.from('hello');
let buffer3 = Buffer.from([1,2,3]);
console.log(buffer2)
console.log(buffer3)