const fs = require('fs');
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

let promise = fs.promises.readFile("f1.txt");





function cb1(data) {
    console.log("file1 data " + data);


    let promise3 = fs.promises.readFile("f3.txt");
    return promise3;
}

function cb2(data) {
    console.log("file2 data " + data);
    // let promise3= fs.promises.readFile("f3.txt");

    // return promise3;

}

function cb3(data) {
    console.log("file3 data " + data);

    let promise2 = fs.promises.readFile("f2.txt");

    return promise2;


}


promise.then(cb1).then(cb3).then(cb2);