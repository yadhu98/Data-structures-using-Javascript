// Given a sorted array nums and a target value, return the index if the target is found. If the target is not found, return -1.

// Example
// Input: nums = [1, 2, 3, 4, 5], target = 3
// Output: 2

Array.prototype.binarySearch = function (target) {
  let array = this;
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5];

console.log(arr.binarySearch(5));
