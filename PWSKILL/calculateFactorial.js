function calFactorial(factorial){
    if(factorial==0)
        return 1;
    else
    return factorial*calFactorial(factorial-1);
}

console.log(calFactorial(5));
console.log(calFactorial(0));
