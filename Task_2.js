function factorial(a){
    if(a === 0 || a === 1) return 1;
    else
    return a * factorial(a-1);
}
let a=3;
let result=factorial(a);
console.log("The factorial of " + a + " is " + result);