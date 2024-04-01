// we will see output in browser console
let person={
   name: 'Bitan',
   age: 25,
}

console.log(person);

let isPerson= person.hasOwnProperty('name'); // returns true if name property is vailable inside the object else returns false
console.log(isPerson);

function Car(name, model, year)
{
    this.name=name;
    this.model=model;
    this.year=year;

    // this.drive= ()=>{
    //     console.log(`${this.name} is driving`);
    
    // }
}
Car.prototype.drive= function(){
    console.log(`${this.name} is driving`);

}
let car1= new Car('Audi', 'A8', 2021);
let car2= new Car('BMW', 'X5', 2020);
let car3= new Car('Mercedes', 'S-Class', 2022);
// console.log(car1.drive());
car1.drive();
// car1.Object.drive();
// car1.prototype.drive();
console.log(car1);
console.log(car2);
console.log(car3);

// now drive is present in every car object but outside of prototype object 

// lets push drive inside prototype object
// prototype object is a object that is available to every object in JS


