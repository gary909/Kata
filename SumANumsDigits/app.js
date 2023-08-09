function sumDigits(number) {
//  let myCount = 0;
//  for(let i = 0; i < number; i++){
//     myCount = myCount + number[i]
//  }
//  return myCount;
// return number[1]

var x = Number(number);
// return x;
return isNaN(x); 
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5