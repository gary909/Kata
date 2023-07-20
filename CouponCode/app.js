function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let expires = new Date(expirationDate);
    let current = new Date(currentDate);
    
      if (enteredCode !== correctCode){
        return false;
      }else if(current > expires){
        return false;
      }else{
        return true;
      }
    }

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); // true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false
console.log(checkCoupon('123','123','February 5, 2014','January 1, 2014')); // false