function toNumberArray(stringarray){
    let numbers = stringarray.map(Number);
    return numbers;
}

console.log(toNumberArray(["1.1","2.2","3.3"])); // [1.1,2.2,3.3]