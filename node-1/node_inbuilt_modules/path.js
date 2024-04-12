const path = require("path");
const fs= require("fs");
const { log } = require("console");

///Users/bitanguharoy/Documents/FrontEnd/LearningFrontEnd/node-1/node_inbuilt_modules/myDirectory/f33.txt


let ext=path.extname("/Users/bitanguharoy/Documents/FrontEnd/LearningFrontEnd/node-1/node_inbuilt_modules/myDirectory/f33.txt")
console.log(ext);

let baseName= path.basename("/Users/bitanguharoy/Documents/FrontEnd/LearningFrontEnd/node-1/node_inbuilt_modules/myDirectory/f33.txt")
console.log(baseName);

console.log(__dirname);

console.log(__filename);

const source="/Users/bitanguharoy/Documents/FrontEnd/LearningFrontEnd/node-1/node_inbuilt_modules/myDirectory/f33.txt"
const dest= "/Users/bitanguharoy/Documents/FrontEnd/LearningFrontEnd/node-1/node_inbuilt_modules/myDirectory2"

// fs.copyFileSync(source,dest+"/f33.txt");
// fs.unlinkSync("myDirectory/f33.txt")
let fileToBeCopied= path.basename(source);
let destPath= path.join(dest,fileToBeCopied);
// console.log(destPath);


fs.copyFileSync(source,destPath);

console.log("file copied");
