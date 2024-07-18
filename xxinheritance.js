class Button {
    constructor(name){
        console.log('constructor');
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    onClick(fn){
        this.button.onclick = fn;
    }
}

class GreenButton extends Button{
    onClick(fn){
        super.onClick(function(){
            this.button.style.background = 'green';
            fn();
        }.bind(this));
    }
}
var b1 = new GreenButton('GButton');
b1.onClick (function(){
    console.log('Clicked');
});