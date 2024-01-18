// data stored in form of key-value pair  :-> Object 

let person= {

    name : "bitan ",
    age: 35,
    address: "kolkata"
    

}

console.log(person['age'])

console.log(person.age) // dot notation 


let captain={
    name: "Bitan",
    age: 25,
    degree:["Btech","Mtech"],

    sayHi: function ()
    {
        console.log("Bitan Says Hii!")
    },

    address: {
        country: "India ",
        city: {name:" Kolkata",
        pin: "700121",
             },
       phone: "7044",

    },
    isCoder: true

}


console.log(captain['address']['city']['pin'])

console.log(captain.address.city.pin)


captain['grad']=2024  // key can be added as well 

console.log(captain)

captain.sayHi()

// age will be deleted 
delete captain.age 
console.log(captain)