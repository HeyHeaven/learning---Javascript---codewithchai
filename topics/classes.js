// just like 'class' in Java, JS have 'class'

class Student {
    constructor(name, rollno, std, age){
        this.name=name
        this.rollno=rollno
        this.std = std
        this.age=age
    }
    printer() {
        console.log(`Student name : ${this.name}`);
        console.log(`Roll No. : ${this.rollno}`);        
        console.log(`Std : ${this.std}th`);    
        console.log(`Student Age : ${this.age} years old`);
    }
}
class Teacher extends Student{
    constructor(name, rollno, std) {
        super(name, rollno, std)
    }
    printer() {
        console.log(`Student name : ${this.name}`);
        console.log(`Roll No. : ${this.rollno}`);        
        console.log(`Std : ${this.std}th`);
    }

}

const user1 = new Student('kundan', 54, 10, 20)
user1.printer()

const teacher1 = new Teacher('kundan', 121, 12)
teacher1.printer()
