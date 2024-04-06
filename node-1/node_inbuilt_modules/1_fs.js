// dive into file system module 
const { log } = require("console");
const fs= require("fs");


//1. read  file 

let content = fs.readFileSync("f1.txt");

console.log(content+"");

//2. write in a file
fs.writeFileSync("f1.txt","I am writing file1");


fs.writeFileSync("f6.txt","I am updating file6");


//3.update a file

fs.appendFileSync("f4.txt","\nI am appending in file1");

//4. delete a file
fs.unlinkSync("f6.txt");

//5. fs modules with directories 

