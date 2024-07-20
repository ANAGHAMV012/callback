const regexObj = /cat/i;
const str1 = "The cat is white";
const str2 = "Rat eats meat";
const str3 = "Is it ok ?";

var result1 = regexObj.test(str1);
console.log(result1);

var result2 = regexObj.test(str2);
console.log(result2);

var result3 = regexObj.test(str3);
console.log(result3);