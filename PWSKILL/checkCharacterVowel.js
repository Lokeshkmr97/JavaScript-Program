// filter all the vowel in the other string
const st = "zxcvbnmlkjhgfdasuisaqwertyp";


//  using the set function to find the all distinct vowel in the other string.

const distinctVowels=(str)=>{
    let distinctVowel=new Set(str)
    return Array(distinctVowel)
}

console.log(`Distinct Vowels using set function = ${distinctVowels(st)}`)


// function filterVowels(str){
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     // return str.split('').filter(char => vowels.includes(char)).join(""); using filter method

//     //  with filter method
//     let allVowel="";
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             allVowel+=str[i];
//         }
//     }
//     return allVowel;  // return all the vowels in the other string  // using for loop with includes method
// }

// console.log(filterVowels(st));

function filterDistinctVowels(str) {
  let arr = ["a", "e", "i", "o", "u"];
  let allDistinctVowel = "";
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i]) && !allDistinctVowel.includes(str[i])) {
      allDistinctVowel += str[i];
    }
  }
  return allDistinctVowel;
}

console.log(
  `this function is used for the filter all the distinct vowels from the string =${filterDistinctVowels(
    st
  )}`
); // output: aeiou
