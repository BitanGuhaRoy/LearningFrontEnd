class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
       
    }
    hello(){
        console.log(` person saying hello`);
    }
}

class Student extends Person{
    constructor(name, age, rollNo){
        super(name, age);
        this.rollNo = rollNo;
    }
    hello(){
        console.log(` student saying hello`);
    }
}

class Instructor extends Person{
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }
}

let Student1 = new Student('Bitan', 25, 101);
let Instructor1 = new Instructor('Bitan', 25, 100000);

console.log(Student1);
console.log(Instructor1);
Student1.hello();