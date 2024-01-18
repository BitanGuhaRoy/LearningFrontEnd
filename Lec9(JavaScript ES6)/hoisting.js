
console.log(a)  // op is undefined 
sayNmae()
//bits() // this  will throw error because the function isn't loaded in memory allocation phase,
// only undefined value is stored in bits
var a=3;

function sayNmae() // this is loaded in memory allocation phase only
{
    console.log("Hey There! I'm Bits")
}
// this is hoisting 


// bits works as a variable, in memory phase bits doesn't get function body 
let bits= function(){
    console.log("Hey There! I'm function expression ")
}

bits() // this will work 


console.log(bb)// error :: bb can't be accessed before initialization, system knows there is something named bb

let bb= 45  // 'let' initializes bb in a temporal dead zone to avoid hoisting until code execution takes place 
