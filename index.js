// const {add} =require("./sum");
// const os=require("os");
// const fm=os.freemem();
// const tm=os.totalmem();
// console.log(tm,fm);


// const sum1=add(2,4);
// console.log(sum1);
// const fs=require("fs")
// const f=fs.readFileSync("test.txt","utf-8")
// console.log(f);
// const w= fs.writeFileSync("exp.txt","wrinting the text in file")


```js
// Import the add function from the sum module
const { add } = require("./sum");


// Import the Operating System (OS) module
const os = require("os");

// Get the amount of free memory available
const freeMemory = os.freemem();

// Get the total amount of system memory
const totalMemory = os.totalmem();

// Display total and free memory
console.log("Total Memory:", totalMemory);
console.log("Free Memory:", freeMemory);


// Call the add function with two numbers
const sum = add(2, 4);

// Display the result
console.log("Sum:", sum);


// Import the File System (fs) module
const fs = require("fs");

// Read the contents of test.txt synchronously
const fileContent = fs.readFileSync("test.txt", "utf-8");

// Display the file contents
console.log("File Content:", fileContent);


// Write text into exp.txt synchronously
fs.writeFileSync("exp.txt", "Writing the text in file");
```
