const products=[
    {
        id:1,
        name:"Laptop",
        price:150000
    },
    {
        id:2,
        name:"Phone",
        price:25000
    },
    {
        id:3,
        name:"Fax",
        price:2500
    },
    {
        id:4,
        name:"Mouse",
        price:500
    },
    {
        id:5,
        name:"Keyboard",
        price:1000
    }
]

// increase the all products price by 1000.
let updatePrice=products.map((product)=>{
                return product.price+1000;
})

let updateProduct=products.map((product)=>{
    return {...product,price:updatePrice[products.indexOf(product)]}
});

console.log(updateProduct);

// sort the products in descending order based on price.

let sortedProducts=updateProduct.sort((a,b)=>b.price-a.price);

console.log(sortedProducts);

// filter out the products which price is less than 10000.

let filteredProducts=updateProduct.filter((product)=>product.price>=10000);

console.log(filteredProducts);

// find the average price of all the products.

let totalPrice=updateProduct.reduce((acc,product)=>acc+product.price,0);
let averagePrice=totalPrice/updateProduct.length;

console.log(averagePrice);

// find the product with maximum price.

let maxProduct=updateProduct.reduce((max,product)=>max.price>product.price?max:product,updateProduct[0]);

console.log(maxProduct);

// find the product with minimum price. 

let minProduct=updateProduct.reduce((min,product)=>min.price<product.price?min:product,updateProduct[0]);

console.log(minProduct);

// find the total number of products.

let totalProducts=updateProduct.length;

console.log(totalProducts);

// find the product with the highest number of digits in price.

let maxDigitProduct=updateProduct.reduce((max,product)=>Math.max(max.price.toString().length,product.price.toString().length),updateProduct[0]);

console.log(maxDigitProduct);

// find the product with the lowest number of digits in price.  

let minDigitProduct=updateProduct.reduce((min,product)=>Math.min(min.price.toString().length,product.price.toString().length),updateProduct[0]);

console.log(minDigitProduct);

// find the median price of all the products.

let sortedPrices=updateProduct.map((product)=>product.price).sort((a,b)=>a-b);
let medianPrice;
if (sortedPrices.length%2===0){
    medianPrice=(sortedPrices[sortedPrices.length/2-1]+sortedPrices[sortedPrices.length/2])/2;
} else {
    medianPrice=sortedPrices[Math.floor(sortedPrices.length/2)];
}

console.log(medianPrice);

// find the mode price of all the products.

let modePrice=updateProduct.reduce((acc,product)=>{
    if (acc[product.price]===undefined){
        acc[product.price]=1;
    } else {
        acc[product.price]++;
    }
    return acc;
}, {});

let maxMode=0;

for (let price in modePrice){
    if (modePrice[price]>maxMode){
        maxMode=modePrice[price];
        modePrice=parseInt(price);
    }
}

console.log(modePrice);

// find the range of price of all the products.

let minPrice=updateProduct.reduce((min,product)=>min.price<product.price?product.price:min,updateProduct[0].price);
let maxPrice=updateProduct.reduce((max,product)=>max.price>product.price?product.price:max,updateProduct[0].price);

console.log(`Range of price is ${maxPrice-minPrice}`);

// find the standard deviation of price of all the products.

let meanPrice=totalPrice/updateProduct.length;
let variance=updateProduct.reduce((acc,product)=>acc+(product.price-meanPrice)**2,0)/updateProduct.length;
let standardDeviation=Math.sqrt(variance);

console.log(`Standard deviation of price is ${standardDeviation}`);

// find the variance of price of all the products.

console.log(`Variance of price is ${variance}`);

// find the correlation coefficient between price and id of all the products.

let correlationCoefficient=updateProduct.reduce((acc,product,index)=>acc+(product.price-meanPrice)*(product.id-idMean),0)/(updateProduct.length*variance);

console.log(`Correlation coefficient between price and id is ${correlationCoefficient}`);

// find the weighted average price of all the products.

let totalWeight=updateProduct.reduce((acc,product)=>acc+product.price,0);
let weightedAveragePrice=updateProduct.reduce((acc,product)=>acc+product.price*product.price,0)/totalWeight;

console.log(`Weighted average price is ${weightedAveragePrice}`);

// find the median price of all the products using a binary search algorithm.

let binarySearch=function(arr, target){
    let left=0;
    let right=arr.length-1;
    let result=-1;

    while (left<=right){
        let mid=Math.floor((left+right)/2);

        if (arr[mid]==target){
            result=mid;
            right=mid-1;
        } else if (arr[mid]<target){
            left=mid+1;
        } else {
            right=mid-1;
        }
    }

    return result;
}

let sortedPrices1=updateProduct.map((product)=>product.price).sort((a,b)=>a-b);

let medianIndex=Math.floor(sortedPrices1.length/2);

console.log(`Median price using binary search is ${sortedPrices1[binarySearch(sortedPrices1,sortedPrices1[medianIndex])]}`);

// find the mode price of all the products using a binary search algorithm.

let modePriceIndex=binarySearch(sortedPrices1,modePrice);

console.log(`Mode price using binary search is ${sortedPrices1[modePriceIndex]}`);

// find the range of price of all the products using a binary search algorithm.
