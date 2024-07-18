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

var newArr = arr.map((item) => {
    // return item.name + item.place;
    return{
        ...item,
        country: 'India'
    }

});

console.log(newArr);