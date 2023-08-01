// function checkDifferenceAndType(data) {
//     // Check for null and undefined
//     if (data === null) {
//       console.log("The value is null.");
//     } else if (data === undefined) {
//       console.log("The value is undefined.");
//     } else {
//       console.log("The value is neither null nor undefined.");
//     }
  
//     // Check the data type using typeof
//     console.log("Data type: " + typeof data);
//   }
  
//   // Testing with different values
//   console.log("Testing with null:");
//   checkDifferenceAndType(null);
  
//   console.log("\nTesting with undefined:");
//   checkDifferenceAndType(undefined);
  
//   console.log("\nTesting with a number:");
//   checkDifferenceAndType(42);
  
//   console.log("\nTesting with a string:");
//   checkDifferenceAndType("Hello, world!");
  
//   console.log("\nTesting with an object:");
//   checkDifferenceAndType({ name: "John", age: 30 });

  
// let languages = 'java javaScript python cSharp';

// let result = languages.lastIndexOf('S');

// console.log(result);

// let variable = 'hello programmers';

// let result1 = Number(variable);

// console.log(result1); // Return NaN Value


// let num1 = 32;

// let num2 = '32';

// let result2 = num1 !== num2;

// let result3 = num1 != num2;

// console.log(result2, result3);

// let n1 = 2;

// let n2 = 5;

// let res = n1 ** n2 * 2;

// console.log(res);

// // let i = 4;

// // for (let j = 0; i < 10; i++) {
// //   if (j === 1 || i === 6) {
// //     continue;
// //   } else {
// //     console.log(i, j);               output - 4,0
// //                                               5,0
// //                                               6,0                                           

// //     if (i === 7) {
// //       break;
// //     }
// //   }
// // }

// let i = 0;

// for (i; i < 5; i++) {
//   console.log(i);
// }

// Scope of the variable
// =========================
// for(let i=10;i>0;i--){
//     console.log(i);
// }

// console.log(i) give error because of let variable is used for it so it can not we use outside of the for loop.


// const describeYourState=(population,food,place)=>{
//     console.log(`My state population is ${population} Its traditional food is ${food} and historical place name is ${place}`);
// }
// describeYourState(10000,"rice","Manpur")
// console.log(describeYourState(10000,"rice","Manpur"));


// let person = {
//     name: 'john',
  
//     age: 25,
//   };
  
//   function greet(person) {
//     person.name = `Mr ${person.name}`;
  
//     return `Welcome ${person.name}`;
//   }
  
//   greet(person);

// function capitalize(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');
  
//     // Capitalize the first letter of each word
//     const capitalizedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
  
//     // Join the capitalized words back into a string
//     return capitalizedWords.join(' ');
//   }


// const capitalize=(str)=>{
    
//     let word=str.split();
//     for(let i=0;i<word.length;i++){
//         word[i]=word[i][0].toUpperCase()+word[i].slice(1);
//     }
//     return word.join(' ');
// }
  
//   // Test the function
//   const inputString = 'i am the champions';
//   const outputString = capitalize(inputString);
//   console.log(outputString); // Output: 'We Are The Champions'
  

const country={
    name:"MP",
    capital:"Bhopal",
    language:"Hindi",
    population:1000000,
    neighbors:"Indore"
}

console.log(country)

country.population+=2000000;
console.log(country.population)

country["population"]-=1000000;
console.log(country.population)

console.log(country.language.toUpperCase());


let car = {
    color: 'Blue',
  
    model: 2021,
  
    company: 'Toyota',
  };
  
  let carColor = 'Blue';
  
  console.log(car[carColor]);  // undefined
  
  console.log(car.carColor);  // undefined