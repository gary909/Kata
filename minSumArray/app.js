function minSum(arr) {
    // your code here
    let total = 0;

    // duplicate array to avoid mutations
    let incArr = arr.slice();

    // sort array in num order
    incArr = incArr.sort(function(a, b) {
        return a - b;
    });

    // Halve arr length
    incArr = incArr.splice(0, Math.floor(incArr.length / 2));



    // duplicate array to avoid mutations
    let decArr = arr.slice();

    // sort array in dec order
    decArr = arr.sort(function(a, b) {
        return b - a;
    });  

    // Halve arr length
    decArr = decArr.splice(0, Math.floor(decArr.length / 2));


    // Mulitply results
    for(let i = 0; i < decArr.length; i++){
        total = total + (decArr[i] * incArr[i])
    }

    return total;
}

console.log(minSum([5,4,2,3])); // 22
console.log(minSum([12,6,10,26,3,24])); // 342
console.log(minSum([9,2,8,7,5,4,0,6])); // 74