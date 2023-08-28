var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
  ];

function isRubyComing(list) {
    let checker = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i].language == "Ruby"){
            checker = checker + 1;
        } else {
            checker = checker;
        }
    }
    if(checker > 0){
        return true;
    } else {
        return false;
    }
}

console.log(isRubyComing(list1)); // True
console.log(isRubyComing(list2)); // False