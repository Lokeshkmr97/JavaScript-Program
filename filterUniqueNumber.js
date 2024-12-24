let arr = new Array(1,2,3,4,5,4,2,1,3,7,8);

let res=arr.filter((curelement,index,arr)=>{
        return arr.indexOf(curelement)==index;
})

console.log("Unique elements : " + res);
