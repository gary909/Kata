function generateShape(integer){
 let myStr = '';
 let myArr = [];
 
 for(let i = 0; i < integer; i++){
     myStr = myStr + "+"
    }

 for(let i = 0; i < integer; i++){
    myArr.push(myStr)
   }
    
 return myArr.join('\n');
}

console.log(generateShape(8)); // 