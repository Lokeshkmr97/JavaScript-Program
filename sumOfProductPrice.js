let productPrice = [12500,5000,8000,6000,4500]

let res=productPrice.reduce((prevValue,curValue) => {
    return prevValue+curValue;
},0)

console.log(res);
