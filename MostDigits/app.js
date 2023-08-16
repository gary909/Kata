function findLongest(array){
    return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))
}

console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900
console.log(findLongest([100980, 252350, 8])); // 900