const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

const list2 = [
{ firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
{ firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];  

function countDevelopers(list1) {
    let myCount = 0;
    for(let i = 0; i < list1.length; i++){
        if(list1[i].continent == 'Europe' && list1[i].language == 'JavaScript'){
            myCount = myCount + 1;
        }
    }
    return myCount
}



console.log(countDevelopers(list1)); // 1, "Noah is the only JavaScript developer from Europe"

console.log(countDevelopers(list2)); // 0, "Lukas is not a JS devolper"