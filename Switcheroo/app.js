function switcheroo(x){
    let myStr = '';
    for(let i = 0; i < x.length; i++){
        if(x[i] == 'a'){
            myStr = myStr + 'b';
        } else if (x[i] == 'b'){
            myStr = myStr + 'a';
        } else if (x[i] == 'c'){
            myStr = myStr + 'c';
        }
    }
    return myStr
}

console.log(switcheroo('abc')); // 'bac'
console.log(switcheroo('aaabcccbaaa')); // 'bbbacccabbb'
console.log(switcheroo('ccccc')); // 'ccccc'