console.log('Requesting 1');

myFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log(data);
        console.log('Requesting 2');
        return myFetch('https://jsonplaceholder.typicode.com/todos/2');
    })
    .then((data) => {
        console.log(data);
        console.log('Requesting 3');
        return myFetch('https://jsonplaceholder.typicode.com/todos/3');
    })
    .then((data) => {
        console.log(data);
});