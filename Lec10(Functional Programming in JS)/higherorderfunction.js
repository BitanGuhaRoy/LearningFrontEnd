let arr=[1,2,3,4,5]

function circleArea(r)
{
    return Math.PI*r*r
}

function circlePerimeter(r)
{
    return 2*Math.PI*r
}

function circleDiameter(r){
    return 2*r
}
function calculate(arr, logic)
{
    let newArr=[]
    for(let i=0;i<arr.length;i++)
    {
        newArr.push(logic(arr[i]))
    }
    return newArr
}



let areaarray=calculate(arr,circleArea)
console.log(areaarray)

let perimeterarray=calculate(arr,circlePerimeter)
console.log(perimeterarray)

let diameterarray=calculate(arr,circleDiameter)
console.log(diameterarray)




