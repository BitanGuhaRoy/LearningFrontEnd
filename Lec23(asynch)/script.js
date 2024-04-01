let hello1="hello 1";
let hello2="hello 2";
console.log(hello1);

for(let i=0;i<10;i++)
{
   
}

console.log(hello2);

// asynchronous approach 
let hello3="hello 3";
let hello4="hello 4";

console.log(hello3);


setTimeout(function(){
    console.log("This is asynch part ");
},2000);
// This is non blocking code


console.log(hello4);

