// content in ml - evap % per day - useful in %
function evaporator(content, evap_per_day, threshold){ 
    let count = 0;
    content = 100;
    while(content >= threshold){
        content = content - content * evap_per_day / 100;
        count = count + 1;
    }
    return count;
}

console.log(evaporator(10,10,10)); // 22
console.log(evaporator(10, 10, 5)); // 29