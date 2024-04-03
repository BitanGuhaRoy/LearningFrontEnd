const fs=require("fs");


// synchronously reaidng the files
console.log("before");

let data1=fs.readFileSync("f1.txt")
let data2=fs.readFileSync("f2.txt")
let data3=fs.readFileSync("f3.txt")
// console.log(data1+"");
// console.log(data2+"");
// console.log(data3+"");

console.log("after");
fs.readFile("f1.txt",fileRead);

function fileRead(err, data)
{
   if(err)
   {
     console.log(err);
   }
   else {
        console.log(data+"");
        // fs.readFile("f2.txt",fileRead2); // This will make it in order 
   }
}
fs.readFile("f2.txt",fileRead2);
// parallaly these callbacks are added into queue,so order is not maintained among callbacks 

function fileRead2(err, data)
{
   if(err)
   {
     console.log(err);
   }
   else {
        console.log(data+"");
        // fs.readFile("f3.txt",fileRead3); // This will make it in order
   }
}
fs.readFile("f3.txt",fileRead3);

function fileRead3(err, data)
{
   if(err)
   {
     console.log(err);
   }
   else {
        console.log(data+"");
   }
}

console.log("after async read file ");

