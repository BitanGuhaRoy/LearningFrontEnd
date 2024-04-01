// console.log(this)


function test()
{
    console.log(this)
}
// test() 
// global object in nodejs
// window object in browser


let obj={
    name: 'Bitan',
    age: 25,
    getName: function()
    {
        console.log(this);
    }
}

// obj.getName(); // Bitan


let obj2={
    name: 'Bitan',
    age: 25,
    getName: ()=>{
        function innerFunction(){
            console.log(this);
        
        }

        innerFunction();
    }
}

obj2.getName(); // global object in nodejs
// window object in browser