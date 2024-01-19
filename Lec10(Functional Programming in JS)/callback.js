// callback -> when a function is passed to another function as parameter then it is called callback function

function printName(fun1,fun2)// callback function is passed as parameter 
// fun1 and fun2 are the callback functions
//higher order function -> a function which takes another function as parameter
//printName is a higher order function
{
    console.log(" Bitan")
    fun1() // printname calls the function which is passed into this function
    fun2()
}

function lastName()
{
    console.log(" Guha Roy")//prints the last name
}

function printAge()
{
    console.log(25)
}

printName(lastName, printAge)
// lastName() // this is a function call

