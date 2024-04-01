class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        console.log(`This is constructor`);
    }

    isAdult()
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
}

let person1 = new Person('Bitan', 25);
console.log(person1.isAdult());
