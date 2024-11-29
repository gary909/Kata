function domainName(url){
    const words = url.split('://');
    const back = words[1];
    const back2 = back;
    const back3 = back2.split('.');
    console.log(back3[0]);
  }

console.log(domainName("http://google.com")); // google
console.log(domainName("http://google.co.jp")); // google
console.log(domainName("www.xakep.ru")); // xakep
console.log(domainName("https://youtube.com")); // youtube