function sumEvenNumbers(input) {
  let myNum = 0;
  for(let i = 0; i < input.length; i++){
        if(input[i] % 2 === 0) {
            myNum = myNum + input[i]
        }
  }
    return myNum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30