// find the total amount of the all fruits.

const products=[
    {name:"apple",price:100},
    {name:"Banana",price:500},
    {name:"Gauva",price:600},
    {name:"Pineapple",price:700},
    {name:"Mango",price:200},
]

let totalAmount=products.reduce((acc,product)=>{

    return acc+product.price

},0)

console.log(`Total amount of all fruits is ${totalAmount}`);