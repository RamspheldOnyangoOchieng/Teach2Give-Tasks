//1. Design a function that reverses the digits of an integer. For example, 50should become 5 and -12 should become -21.
function reverseNumber(num){
    
// lets work with only ablsolute numbers only
num = Math.abs(num);

//if the input is between 0 and 9 return the same numeber
    if (num>=0 && num<9){
        return num;
    }

    //Now get the number as we enjoy our code
    let reversedNum = 0;

    while(num!== 0){
        reversedNum = reversedNum * 10 + num%10;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}
let num=356;
console.log(reverseNumber(num));