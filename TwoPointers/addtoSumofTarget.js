// Given a sorted array of integers, find if a pair of elements exists that sum up to a given target value.
// Input
// Array: [1, 2, 4, 7, 11, 15]
// Target: 9
// Output
// true

let array = [1, 2, 4, 10, 11, 15];

function adduptosumTarget(arr, target) {
  let flag = false;
  for (i = 0; i < arr.length; i++) {
    for (j = arr.length - 1; j > 0; j--) {
      if (arr[i] + arr[j] === target) {
        flag = true;
      }
    }
  }
  return flag;
}

console.log(adduptosumTarget(array, 14));

function alternativeMethod(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let low = arr[0];
  let high = arr[arr.length - 1];
  while (low < high) {
    if (arr[low] + arr[high] === target) {
      return true;
    } else if (arr[low] + arr[high] < target) {
      low++;
    } else if (arr[low] + arr[high] > target) {
      high--;
    } else {
      return false;
    }
  }
}
