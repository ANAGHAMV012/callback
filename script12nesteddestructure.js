var obj = {
    name: 'Alice',
    mark: 35,
    place: 'kannur',
    subject: {
        teacher: 'Bob'
    }
}
var {
    subject : {
        teacher
    }
} = obj;

console.log(teacher);