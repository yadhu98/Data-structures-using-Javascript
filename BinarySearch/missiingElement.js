// Problem Statement:
// Given a sorted array representing an arithmetic progression (AP), one element is missing. Write a function to find the missing element using binary search.

// Sample Example:

// Input: arr = [1, 3, 5, 7, 11]

// Output: 9

function missingElement(arr) {
  let low = 0;
  let high = arr.length - 1;
  let d = (arr[high] - arr[0]) / arr.length;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    if (arr[mid] == arr[0] + mid * d) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr[0] + low * d;
}
let array = [1, 3, 5, 7, 11];
console.log(missingElement(array));
