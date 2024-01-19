// square given array 
let arr = [1, 2, 3, 4, 5];
function square(num) {
    return num * num;
}

function squareArray(arr, logic ) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(logic(arr[i])); // logic is a callback function
    }
    return newArr;
}

let sqArr = squareArray(arr, square);
console.log(sqArr);


//map method is applied on array when we want to apply a function on each element of the array 
// it will not change the original array

let newsquarearray=arr.map(square)// square is a callback function
console.log(newsquarearray)


let newcubearray=arr.map(
    function(num){
    return num*num*num

    // this function is applied on each element of the array and result is stored in newcubearray
    // old array is not changed
}   
)
console.log(newcubearray)

