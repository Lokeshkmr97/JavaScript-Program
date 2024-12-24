let products=[
    {name:"Laptop",price:150000},
    {name:"Phone",price:25000},
    {name:"Fax",price:2500},
    {name:"Mouse",price:500},
    {name:"Keyboard",price:1000},
    {name:"Monitor",price:12000}
]

let productNameListLessThanTwentyThousand = products.filter((currElement)=>{
    return currElement.price<20000;
    
})

console.log(productNameListLessThanTwentyThousand);