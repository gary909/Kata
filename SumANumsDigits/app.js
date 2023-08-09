function sumDigits(number) {
let myCount = 0;
var digits = (""+number).split("");
// Check for minus num, if so don't count first element
if (number < 0){
    for(let i = 1; i < digits.length;i++){
        myCount = myCount + Number(digits[i]);
    } 
} else { // if not minus, perform count
    for(let i = 0; i < digits.length;i++){
        myCount = myCount + Number(digits[i]);
    } 
}
return myCount
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5