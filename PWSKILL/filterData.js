//  filter all the odd data from the array.
let arr=[1,2,3,4,5,6,7,8,9]

let filterOddNumbers = arr.filter((element)=>{

    return element%2 !=0;
})

console.log(filterOddNumbers);