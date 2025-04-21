// Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.

// Sample Test Case
// Input
// Array: [1, 1, 2, 2, 3, 4, 4]
// Output
// New length: 4
// Modified array: [1, 2, 3, 4]

let array = [1, 1, 2, 2, 3, 4, 4];

function removeDuplicate(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicate(array));
