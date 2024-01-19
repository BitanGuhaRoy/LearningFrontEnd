// filter is a higher order function which will work based on a condition and will only 
// return those elements from original array which satisfy the condition

let arr= [1,2,3,4,5,6,7,8,9,10]

 //conditions will result true or false

 let evenarr=arr.filter(
   function (numn)
   {
    return numn%2==0 // if this condition is true then the element will be added to the new array
   }
 )  
console.log(evenarr)

