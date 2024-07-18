function MyButton(name){
    this.button = document.createElement('button');
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
}

MyButton.prototype.onClick = function (fn){
    this.button.onclick = fn;
}

function MyGreenButton(name){
    MyButton.call(this, name);
}

console.log(Object.create(MyButton.prototype));
MyGreenButton.prototype = Object.create(MyButton.prototype);
MyGreenButton.prototype.onClick = function (fn) {
    MyButton.prototype.onClick.call(this, () => {
        this.button.style.background = 'green';
        fn();
    });
}

MyGreenButton.prototype.printme = () => {
    console.log('hello');
}

var b2 = new MyGreenButton('Yo!')
b2.onClick(function(){
    console.log('clicked');
});

console.dir(MyButton);
console.dir(b2);