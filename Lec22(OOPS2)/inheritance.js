class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
       
    }
}

class Student extends Person{
    constructor(name, age, rollNo){
        super(name, age);
        this.rollNo = rollNo;
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