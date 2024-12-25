// 1. Display Current Day and Time
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date();
let dayOfWeek = today.toLocaleString('default', { weekday: 'long' });
let currentTime = today.toLocaleTimeString('default', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });

console.log(`Today is : ${dayOfWeek}.`);

console.log(`Current time is : ${currentTime}`);