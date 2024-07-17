function one() {
    var a = {
        value: 100,

    };
    two(a);
    console.log('one', a.value);
}

function two(a){
    a.value = a.value + 1;
    console.log('two', a.value);
}

one();