const arr = [
    {
        name: 'Alice',
        mark: 35,
        place: 'Kannur'
    },
    {
        name: 'Bob',
        mark: 28,
        place: 'Palakkad'
    },
    {
        name: 'Catherine',
        mark: 44,
        place: 'Trissur'
    },
    {
        name: 'Daniel',
        mark: 23,
        place: 'Kollam'
    }
];

let sum = 0
arr.forEach((item) => {
    // console.log(item);
    sum = sum + item.mark;
});
console.log(sum);