let arr=[]
let arr1=[1,2,3,4, null, `bitan`, [3,4,6]]
console.log(arr1)
console.log(arr1[2])
console.log(arr1[6])
console.log(arr1[5])


arr1[3]='RNR'

console.log(arr1[3])

// length of an array 


console.log(`length of the arr1 is `+arr1.length)

//Array Methods

// push method adds value at last of the array 

arr1.push(null)

console.log(arr1)

//pop method removes from last 

let removed= arr1.pop()

console.log(arr1)

console.log(removed)


// shift 
// removes from 0th index 

arr1.shift()
console.log(arr1)
// unshift
// this method is used to add an element at starting index of an array 

arr1.unshift("unshift1")
console.log(arr1)