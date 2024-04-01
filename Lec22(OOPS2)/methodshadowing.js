function Car(name, model, year)
 {
     this.name=name;
     this.model=model;
     this.year=year;
 
   
 }
Car.prototype.hasOwnProperty= function(key){

    return 'Checking if the key is present in the object';
    
}

// now this is in our prototype and default prototype both 
// Now the function in our prototype will be called first
 let car1= new Car('Audi', 'A8', 2021);
 let car2= new Car('BMW', 'X5', 2020);

console.log(car1.hasOwnProperty('drive'));
// 1st the function is checked in your prototype 
// then it is checked in default prototype 

// prototype chaining is followed over here 