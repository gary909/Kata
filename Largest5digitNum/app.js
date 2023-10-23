function solution(digits){
  let myNum = 0;
  for(let i = 0; i < digits.length; i++){
    let number = digits.substr(i, 5); 
    if(Number(number) >= myNum){
        myNum = Number(number);
        }
    }
    return myNum
}

console.log(solution('1234567898765')); // 98765    
console.log(solution("731674765")); // 98765    