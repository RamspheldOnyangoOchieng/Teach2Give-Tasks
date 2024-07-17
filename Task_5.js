const determineDuplicates = (array) => {
    // Sort the array in ascending order to find duplicates
    //lets use the slice & sort functions function ( slice() creates a shallow copy of the array, sort() modifies the original array)
    let sortedArray = array.slice().sort((a, b) => a - b); // Use a compare function for numerical sorting
    // Check for duplicates by comparing adjacent elements in the sorted array
    let result = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        // If the current element is equal to the next one, it's a duplicate
        if (sortedArray[i] === sortedArray[i + 1]) {
            // If the duplicate is not already in the result array, add it
            if (!result.includes(sortedArray[i])) {
                // Add the duplicate to the result array, ensuring it's unique (avoid duplicates by checking if it's already in the array)
                result.push(sortedArray[i]);
            }
        }
    }
    return result;
};
//new functiom to break the input value into individual integers for proper sorting
const breakTheInput = (arr) => {
    // Convert the array elements to strings, then split them into individual characters, and finally convert them back to integers
    return arr.toString().split('').map(Number);
};
//initialize an input array
let arr = [78937897438467626519865];
//call the breakTheInput function to convert the input into an array of individual integers
let newArray = breakTheInput(arr);
console.log("Broken array:", newArray);
//call the Find duplicate function now to confirm the required functionality
let duplicates = determineDuplicates(newArray);
console.log("Duplicate values:", duplicates);
