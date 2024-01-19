let arr=[1,2,3,4,5]
//calcuate sum of all elements of array
let sum=0

console.log(arr)
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i]
}
console.log(sum)


let totalsum=arr.reduce(function(sum,el){
    return sum+el
}, 0)


console.log(totalsum)

