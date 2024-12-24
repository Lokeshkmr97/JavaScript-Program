let multiplyByTwoInEachElement = (arr)=>{
    let result = arr.map((element,index)=>{
        // return arr[index]*2;
        return element * 2; // This will multiply each element by 2 directly without creating a new array. This is a more efficient way to solve the problem.  // arr[index] is a way to access the current element in the original array.  // element is a variable that stores the current element in the array during the map function.  // index is a variable that stores the current index in the array during the map function.  // The return statement returns the modified value for each element in the array.  // The resulting array is stored in the variable result.  // The original array remains unchanged.  // The map function returns a new array with the modified values.  // The original array is not modified.  // The map function is a higher-order function that iterates over each element in an array and applies a function to each element.  // The map function creates a new array with the modified values.  // The map function does not modify
    })
    return result;
}

let arr = [1,2,3,4,5];

console.log(multiplyByTwoInEachElement(arr)); // Output: [2, 4, 6, 8, 10]