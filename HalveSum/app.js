function halvingSum(n) {
    let sum = 0;
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
      sum = sum + i;
    }
    return sum;
}


console.log(halvingSum(25)); // 47
console.log(halvingSum(127)); // 247