// Largest number in an Array

// 1) Brute Force

var input = [3, 5, 7, 2, 8, -1, 4, 10, 12];

function largestInArrayBruteForce(arr) {
  let largestNumber = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

console.log(largestInArrayBruteForce(input));

// 2) Built ijn method

console.log(Math.max(...input));

// 3) Recurssive method

function isMax(arr, start, end) {
  if (start === end) {
    return arr[start];
  }
  let mid = Math.floor((start + end) / 2);

  let maxRight = isMax(arr, start, mid);
  let maxLeft = isMax(arr, mid + 1, end);

  return Math.max(maxRight, maxLeft);
}

console.log(isMax(input, 0, input.length - 1));
