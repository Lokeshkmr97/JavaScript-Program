/*
Que-1
*
* *
* * *
* * * *
* * * * *
*/


// for (let i = 0; i < 5; i++) {
//     let row=" ";
//     for (let j = 0; j <i+1; j++) {
//         row+="*";
//     }
//     console.log(row);
// }


/*
Que-2
* * * * *
* * * *
* * * 
* *
*

*/

// for(let i=0;i<5;i++){
//     let row=" ";
//     for(let j=0;j<5-i;j++){
//         row+="*";
//     }
//     console.log(row);
// }

/*
Que-3
    *
   **
  ***
 ****
*****
*/

for(let i=0;i<5;i++){
    let row=" ";
    for(let j=0;j<5-i;j++){
        row+=" ";
    }
    for(let k=0;k<=i;k++){
        row+="*";
    }
    console.log(row);
}
