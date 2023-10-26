function showSequence(num){
  let SequenceSum = 0;
  for(let i = 0; i <= num; i++){
    SequenceSum = SequenceSum + i;
  }
  return SequenceSum;
  
}

  console.log(showSequence(6)); // "0+1+2+3+4+5+6 = 21"