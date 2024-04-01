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
        return this.age >= 18;
    }
}

let Person1 = new Person('Bitan', 25);
console.log(Person1.isAdult());
