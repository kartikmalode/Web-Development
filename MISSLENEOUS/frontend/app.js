class Person{
    constructor(name,age){
        console.log("person class");
        this.name = name;
        this.age = age;

    }
    talk(){
        console.log(`Hi I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("Student class");
        super(name,age);          //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher Class");
        super(name,age);
        this.subject = subject;
    }
}

let t1 = new Teacher("Thakare",45,"DSBDA");
let s1 = new Student("samir",21,50);
let p1 = new Person("anand",20);


console.log(t1);
console.log(s1);
console.log(p1);

