function divCon(x){
    let myCnt = 0;
    let myNum = 0;
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] != 'number'){
            myCnt = myCnt + parseInt(x[i], 10);
        } else {
            myNum = myNum + x[i]
        }
    }
    return myNum - myCnt;
}

console.log(divCon([9, 3, '7', '3'])); //  2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); //  14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // 13