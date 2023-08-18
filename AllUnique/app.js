function hasUniqueChars(str){
    var obj = {};
    for (var i = 0; i < str.length; ++i) {
      var ch = str[i];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
}

console.log(hasUniqueChars("  nAa")); // False
console.log(hasUniqueChars("abcdef")); // True
console.log(hasUniqueChars("aA")); // True
console.log(hasUniqueChars("++-")); // False