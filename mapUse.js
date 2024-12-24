let arr=[1,2,3,4,5,6,7,8,9,10];

let result = arr.map((curEle)=>{
    if(curEle%2==0)
        return curEle*curEle;
    
}).filter((curEle)=>{
    return curEle!==undefined
});

console.log(result);


//  uging for loop
let newArr=[];
for (let i=0; i<arr.length; i++)
{
    if (arr[i]%2 ==0)
        newArr.push(arr[i]*arr[i]);

}

console.log(typeof newArr);

console.log(`Using For Loop ${newArr}`);