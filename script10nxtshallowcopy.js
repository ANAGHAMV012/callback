var obj1 = {
    a: 1,
    b: 2,
    c: {
        name: 'raman',
        age: 45
    }
}
var obj2 = {...obj1};
obj1.d = 44;
obj1.c.name = 'krishnan'

console.log(obj1, obj2);