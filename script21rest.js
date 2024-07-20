function test(...total){
    const a = total.reduce((sum, current) => sum + current)
    console.log(a);
}
test(11, 44, 64, 22, 66, 3);