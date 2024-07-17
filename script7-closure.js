function add (a, b){
    function myAdd(){
        const c = a + b;
        return c;
    }
    return myAdd;
}
function main(){
    const res = add(3, 4);
    const val = res();
    console.log(val);
}
main();