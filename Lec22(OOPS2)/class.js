class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        console.log(`This is constructor`);
    }

    isAdult() // this kind of method is called prototype method
    {
        if(this.age >= 18)
        {
            return `${this.name} is an adult`;
        }
        else 
        {
            return  `${this.name} is not an adult`;
        }
    }

    static staticMethod()
    {
        console.log(`This is static method`);
    }
}

let person1 = new Person('Bitan', 25);
console.log(person1.isAdult());

Person.staticMethod();
