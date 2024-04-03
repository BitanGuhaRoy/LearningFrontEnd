// make this a module and expose the functions so that others can use these functions 

function add(a, b) {
    console.log(a+b); 
}
function sub(a, b) {
    console.log(a-b); 
}
function mul(a, b) {
    console.log(a*b); 
}
function divide(a, b) {
    console.log(a/b); 
}


module.exports = {

   addition: add,
   subtraction: sub,
   multiplication:  mul,
   division: divide
}