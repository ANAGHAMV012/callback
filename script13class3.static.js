class Student {
    name;
    yob;
    constructor(name, yob){
        this.name = name;
        this.yob = yob;
    }

    static printMinYob = function(...args){     //static fnctns written inside class
        var arr = args.map((item => item.yob));
        console.log(Math.min(...arr));
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

Student.printMinYob(student1, student2, student3);