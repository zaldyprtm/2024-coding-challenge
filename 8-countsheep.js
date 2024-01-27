// DAY 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    //your code here
    let res = '';
      for (let i = 1; i <= num; i++) {
    res += `${i} sheep...`;
  }
  return res;
};
 
console.log(countSheep(3));