console.log('started');

$.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    success: function(msg){
        console.log(msg);
    },
    error: (xhr, statusText) => {
        console.log(statusText);
    },
});

function buttonClick(){
    console.log('clicked');
    pr.then((data) => {
        console.log(data);
    },  (err) => {
        console.log(err);
    });
}     

var pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');
console.log('ended');