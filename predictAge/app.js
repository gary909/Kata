function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let myArr = [age1,age2,age3,age4,age5,age6,age7,age8];
    let myCnt = 0;
    // Add mulitply each number by itself
    for(let i = 0; i < predictAge.length; i++){
        // Add mulitply each number by itself
        myArr[i] = myArr[i] * myArr[i];
        // Add them together
        myCnt = myCnt + myArr[i]
    }
    // find the square root;
    let mySqr = Math.sqrt(myCnt);
    // Divide by 2
    myAns = mySqr / 2;
    // round down to nearest integer
    let finalAns = Math.floor(myAns);
    return finalAns;
}

console.log(predictAge(65,60,75,55,60,63,64,45)); // 86