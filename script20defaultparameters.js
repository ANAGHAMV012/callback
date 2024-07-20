function average(a = getDefault(), b = 0) {
    console.log(a, b);
    const avg = (a + b) / 2;
    return avg;
}
function getDefault() {
    return 100;
}
const avg = average();
console.log(avg);