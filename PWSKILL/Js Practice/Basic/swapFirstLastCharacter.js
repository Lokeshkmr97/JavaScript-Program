// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  


let str = "Hello";

if (str.length >= 2) {
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    let newStr = lastChar + str.slice(1, -1) + firstChar;
    console.log(newStr);
} else {
    console.log("The string length must be broader than or equal to 1.");
}

// Output: olleH