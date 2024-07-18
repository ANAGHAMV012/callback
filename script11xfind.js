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

var found = arr.find((item) => {
    return item.name === 'Bob';
});

console.log(found);