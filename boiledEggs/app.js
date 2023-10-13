function cookingTime(eggs) {
    return 5 * Math.ceil(eggs / 8);
}

console.log(cookingTime(0)); // '0'
console.log(cookingTime(5)); // '5'
console.log(cookingTime(10)); // '10'
console.log(cookingTime(8)); // '10'