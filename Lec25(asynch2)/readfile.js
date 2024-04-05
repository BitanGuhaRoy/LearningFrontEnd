const fs= require('fs');
// fs.readFile("f1.txt", function(err, data){
      
//     if(err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log("file1 data "+ data);
//     }

//     })

let promise= fs.promises.readFile("f1.txt");
let promise2= fs.promises.readFile("f2.txt");
let promise3= fs.promises.readFile("f3.txt");

// promise.then(function(data){

//     console.log("file1 data "+ data);
// })
// promise.catch(function(err){

//     console.log("error is->"+ err);
// })



// promise2.then(function(data){

//     console.log("file2 data "+ data);
// })
// promise2.catch(function(err){

//     console.log("error is->"+ err);
// })


// promise3.then(function(data){

//     console.log("file3 data "+ data);
// })
// promise3.catch(function(err){

//     console.log("error is->"+ err);
// })

function fileread(data)
{
    console.log("file data "+ data);
}

function errorhandler(err)
{
    console.log("error is->"+ err);
}

promise.then(fileread)
promise.catch(errorhandler)
promise2.then(fileread)
promise2.catch(errorhandler)
promise3.then(fileread)
promise3.catch(errorhandler)