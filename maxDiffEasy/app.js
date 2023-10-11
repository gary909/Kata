function maxDiff(list) {
    
    let topNum = list[0];
    let lowNum = list[0];

    if(list.length == 0 || list.length == 1){
        return 0;
    }

    for(let i = 0; i < list.length;i++){
        if(list[i] > topNum){
            topNum = list[i]
        } else if (list[i] < lowNum){
            lowNum = list[i]
        }
    }
    return topNum - lowNum;
};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11
console.log(maxDiff([16])); // 0
console.log(maxDiff([0])); // 0