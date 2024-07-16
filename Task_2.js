function factorial(myNum){
    if(myNum === 0 || myNum === 1) return 1;
    else
    return myNum * factorial(myNum-1);
}
let myNum= 9;
let result=factorial(myNum);
console.log("The factorial of " + myNum + " is " + result);