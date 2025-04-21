// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that:

// i != j
// i != k
// j != k
// nums[i] + nums[j] + nums[k] == 0.
// The solution set must not contain duplicate triplets.

// Example Test Cases
// Example 1
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2
// Input: nums = [0,1,1]
// Output: []

// Example 3
// Input: nums = [0,0,0]
// Output: [[0, 0, 0]]

function threeSum(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 2) {
          newArray.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return newArray;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
