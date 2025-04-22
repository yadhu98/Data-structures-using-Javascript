// Given a non-negative integer, write a function to compute the square root using binary search. If the square root is not an integer, return the floor value.

// Sample Test Case
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we want the floor value, we return 2.

function sqrt(x) {
  let low = 0;
  let high = x;
  let result = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

console.log(sqrt(9));
