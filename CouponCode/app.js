function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    
    const d1 = new Date(currentDate);
    const d2 = new Date(expirationDate);

    // if(d1 < d2){
    //     return "Date 1 is before Date 2";
    // }

      if(enteredCode != correctCode){
        return false;
      } else if (d1 < d2){
        return true;
      }

    //   return myArr;

    // return myArr[0];

    // const d1 = Date.parse(expirationDate);
    // const d2 = Date.parse(currentDate);

    // return d1
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); // true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false
console.log(checkCoupon('123','123','February 5, 2014','January 1, 2014')); // false