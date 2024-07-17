const obj = {
    a:100,
    b:200,
    myFun: () => {
        return this.a + this.b;
    }
}
console.log(obj.myFun());