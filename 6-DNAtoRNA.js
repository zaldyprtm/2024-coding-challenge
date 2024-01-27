// DAY 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

const DNAtoRNA = (dna) => dna.split('T').join('U');

  console.log(DNAtoRNA('GCAT'));

//   cara kedua
// function DNAtoRNA(dna) {
//     return dna.replaceAll('T','U');
//   