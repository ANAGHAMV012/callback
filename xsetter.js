var b1 = {
    init(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    },
    set width(width){
        this.button.style.width = width + 'px';
    },
    set height(height){
        this.button.style.height = height + 'px';
    },
    get width(){
        return parseInt(this.button.style.width, 10);
    },
    get height(){
        return parseInt(this.button.style.width, 10);
    },
}
b1.init('click');
b1.width = 100;
b1.height = 100;