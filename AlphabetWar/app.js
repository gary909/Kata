function alphabetWar(fight)
{
    let leftSide = 0;
    let rightSide = 0;
    const myArray = fight.split("");

    for(let i = 0; i < myArray.length; i++){
            if(myArray[i] == "w"){
                leftSide = leftSide + 4;
            } else if (myArray[i] == "p"){
                leftSide = leftSide + 3;
            } else if (myArray[i] == "b"){
                leftSide = leftSide + 2;
            } else if (myArray[i] == "s"){
                leftSide = leftSide + 1;
            }  else if (myArray[i] == "m"){
                rightSide = rightSide + 4;
            } else if (myArray[i] == "q"){
                rightSide = rightSide + 3;
            } else if (myArray[i] == "d"){
                rightSide = rightSide + 2;
            } else if (myArray[i] == "z"){
                rightSide = rightSide + 1;
            }   
    }

   if(leftSide > rightSide){
        return "Left side wins!" 
   } else if (rightSide > leftSide){
        return "Right side wins!"
   } else {
        return "Let's fight again!";
   }
}

console.log(alphabetWar("z")); // "Right side wins!" 
console.log(alphabetWar("zdqmwpbs")); // "Let's fight again!"
console.log(alphabetWar("zzzzs")); // "Right side wins!" 
console.log(alphabetWar("wwwwww")); // "Left side wins!"
console.log(alphabetWar("kewjscs")); // "Left side wins!" 
