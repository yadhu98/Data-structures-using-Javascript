// Given a sorted array, write a function to count the number of occurrences of a target element using binary search. The function should return the number of times the target appears in the array.

// Sample Test Case
// Input: nums = [1, 2, 2, 2, 3, 4, 5], target = 2
// Output: 3

function findOccurance(arr, target) {
  function firstPart(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let first = -1;

    while (left < right) {
      let mid = Math.round((left + right) / 2);

      if (arr[mid] === target) {
        first = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        right = mid + 1;
      } else {
        left = mid - 1;
      }
    }
    return first;
  }

  function secondPart(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let last = -1;

    while (left < right) {
      let mid = Math.round((left + right) / 2);

      if (arr[mid] === target) {
        last = mid;
        left = mid + 1;
      } else if (arr[mid] < target) {
        right = mid + 1;
      } else {
        left = mid - 1;
      }
    }
    return last;
  }

  let firstCase = firstPart(arr, target);
  if (firstCase === -1) return 0;

  let secondCase = secondPart(arr, target);
  return secondCase - firstCase + 1;
}

let nums = [1, 2, 2, 2, 3, 4, 5];

console.log(findOccurance(nums, 2));
