function factorial(a){
    if(a === 0 || a === 1) return 1;
    else
    return a * factorial(a-1);
}
let num=6;
let result=factorial(a);
console.log("The factorial of " + num + " is " + result);