function serveDinner(drink ){
    console.log(drink)
}

serveDinner("Mutton")

serveDinner("Chicken")

serveDinner(35)


// There are multiples way to write a function 
//1. Functions as expressions (First Class Citizens)

let sayhi = function()
{
    console.log("Functions as expressions")
}

//2. Arrow function 
let arrowFunction=()=>{
    console.log("Arrow Functions ")
}

//3. Traditional method to write function..
function traditionalFunction()
{
    console.log("Traditional Function ")
}
sayhi()
arrowFunction()
traditionalFunction()

