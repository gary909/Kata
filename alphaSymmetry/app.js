function solve(arr){  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var myArr = arr.map(v => v.toLowerCase());
    let final = [];

    for (let i = 0; i < myArr.length; i++) {
        let count = 0;
        for (let j = 0; j < myArr[i].length; j++) {
        if (myArr[i][j] === alphabet[j]) {
            count++;
            }
        }
        final.push(count); 
    }
    return final
};

console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"])); // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]