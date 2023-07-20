function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    
    const currentDateD1 = new Date(currentDate);
    const expirationDateD2 = new Date(expirationDate);

      if(enteredCode != correctCode){
        return false;
      } else if (currentDateD1 > expirationDateD2){
        return false;
      } else {
        return true;
      }
}

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