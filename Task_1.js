//1. Design a function that reverses the digits of an integer. For example, 50should become 5 and -12 should become -21.

let num=10272;


{
    //if the input is between 0 and 9 return the same numeber
    if (num>=0 && num<9){
        return num;
    }

    //if the input is negative, make it positive
    else if(num<0){
        num *= -1;
    }
    //Now get the number as we enjoy our code
    var reversedNum = 0;
    while(num!= 0){
        var remainder = num % 10;
        reversedNum = reversedNum * 10 + remainder;
        num = Math.floor(num / 10);
    }
    //if the input was negative, make it negative
    if(reversedNum < 0){
        reversedNum *= -1;
    }
    return reversedNum;
}