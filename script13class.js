class Student {
    name;
    yob;
    place;
    constructor(name, yob){
        this.name = name;
        this.yob = yob;
    }
    getAge(){
        return new Date().getFullYear() - this.yob;
    };
    getName(){
        return this.name;
    };
}

var student1 = new Student('Alen', 1990);
var student2 = new Student('Bob', 1995);
var student3 = new Student('Cook', 1980);

console.log(student1);
console.log(student2);
console.log(student3);