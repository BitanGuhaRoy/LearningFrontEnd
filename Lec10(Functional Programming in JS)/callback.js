// callback -> when a function is passed to another function 

function printName(fun)
{
    console.log(" Bitan")
    fun() // printname calls the function which is passed into this function
}

function lastName()
{
    console.log(" Guha Roy")
}

function printAge()
{
    console.log(25)
}

printName(lastName)
// lastName()