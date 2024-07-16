//Design a function that takes a string or sequence of characters as input and
//returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l



// Factorial function to calculate factorial of a number
function factorial(myNum){
    // Base case: factorial of 0 and 1 is 1
    if(myNum === 0 || myNum === 1) return 1;
    else
    // Recursive case: multiply the current number by the factorial of the previous number
    return myNum * factorial(myNum-1);
}

// Testing the factorial function with the number given
let myNum= 9;
// Printing the result of the factorial function call to the console.log function.
let result=factorial(myNum);

console.log("The factorial of " + myNum + " is " + result);