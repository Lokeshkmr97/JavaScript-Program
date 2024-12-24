function cal(operand1, operand2,operators) {

    if(operators=="+"){
        return operand1 + operand2;
    }else if(operators=="-"){
        return operand1 - operand2;
    }else if(operators=="*"){
        return operand1 * operand2;
    } else if(operators=="/"){
        return operand1 / operand2;
    } else{
        return "Invalid operator!";
    }
}

console.log("Summation of no. ", cal(15,25,"+"));
console.log("Subtraction of no. ", cal(15,25,"-"));
console.log("Multiplication of no. ", cal(15,25,"*"));
console.log("divide of no. ", cal(15,25,"/"));
console.log("Remainder of no. ", cal(15,25,"%"));