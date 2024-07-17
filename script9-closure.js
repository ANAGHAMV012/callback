var objs = [
    {
        name: 'one',
        msg:'Hello I am one'
    },
    {
        name: 'Two',
        msg: 'Hello Iam two'
    },
    {
        name: 'Three',
        msg: 'Hello Iam three'
    },
];
function main(){
    objs.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = myCallback;
        document.body.appendChild(bt);
    });
}
function getCallBack(arg){
    return function(){
        alert(arg)
    }
}
function myCallback(){
    alert('hi');
}
main();