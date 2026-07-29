const {add} =require("./sum");
const os=require("os");
const fm=os.freemem();
const tm=os.totalmem();
console.log(tm,fm);


const sum1=add(2,4);
console.log(sum1);
const fs=require("fs")
const f=fs.readFileSync("test.txt","utf-8")
console.log(f);
const w= fs.writeFileSync("exp.txt","wrinting the text in file")
