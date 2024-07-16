//1. Design a function that reverses the digits of an integer. For example, 50should become 5 and -12 should become -21.
function reverseNumber(digit){
    
// lets work with only ablsolute numbers only
digit = Math.abs(digit);

//if the input is between 0 and 9 return the same numeber
    if (digit>=0 && digit<9){
        return digit;
    }

    //Now get the number as we enjoy our code
    let reversedNum = 0;

    while(digit!== 0){
        reversedNum = reversedNum * 10 + digit%10;
        digit = Math.floor(digit / 10);
    }
    return reversedNum;
}
let originalNo=356;
console.log(reverseNumber(originalNo));