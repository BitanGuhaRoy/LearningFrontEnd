// Template in JS that creates objects is called constructor 

function car(_name, _color,_topspeed)
{
    this.name= _name;
    this.color= _color;
    this.topspeed=_topspeed;

    this.drive = () =>{
        console.log(`${this.name} is driving`);
        
    }

}

let car1= new car('BMW', 'Black', 250);
let car2= new car('Audi', 'White', 200);
let car3= new car('Mercedes', 'Grey', 300);

(car1.drive());