// Given a sorted array of integers, find a pair of elements that sum up to a given target value.

// Sample Test Case
// Input
// Array: [1, 2, 4, 7, 11, 15]
// Target: 9
// Output
// Pair: (2, 7)

let array = [1, 2, 4, 10, 11, 15];

function pairSumToGetTarget(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  arr = arr.sort((a, b) => a - b);
  while (low < high) {
    if (arr[low] + arr[high] === target) {
      return [arr[low], arr[high]];
    } else if (arr[low] + arr[high] > target) {
      high--;
    } else if (arr[low] + arr[high] < target) {
      low++;
    } else {
      return "No existance";
    }
  }
}

console.log(pairSumToGetTarget(array, 14));
