// dive into file system module 
const { log } = require("console");
const fs= require("fs");
const path = require("path");


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

// create and delete direcytory 
// create directory 

// fs.mkdirSync("myDirectory/mySubDirectory/deleted");

// fs.rmdirSync("myDirectory/mySubDirectory/deleted");

// 6. check whether a file/ directory exists or not

let doesExist= fs.existsSync("myDirectory");

console.log(doesExist);

// fs.mkdirSync("myDirectory2")

fs.writeFileSync("myDirectory/f33.txt","hi")

// copy this into myDirectory2
