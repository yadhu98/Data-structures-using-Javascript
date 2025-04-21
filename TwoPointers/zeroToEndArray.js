// Move All Zeroes to the End
// Problem Statement
// Given an array, move all zeroes to the end while maintaining the relative order of the non-zero elements.

// Sample Test Case
// Input
// Array: [1, 0, 2, 0, 3]
// Output
// Output: [1, 2, 3, 0, 0]

let array = [1, 0, 2, 0, 3];
[array[2], array[1]] = [array[1], array[2]];
console.log(array);
function zeroToEndTwoPointer(arr) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      //arr[0],arr[0]
      pos++;
    }
  }

  console.log(arr);
}
zeroToEndTwoPointer(array);
