// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We use the integers 0, 1, and 2 to represent red, white, and blue respectively. You must solve this problem without using the library's sort function.

// Example Test Cases
// Input: nums = [2, 0, 2, 1, 1, 0] Output: [0, 0, 1, 1, 2, 2]
// Input: nums = [2, 0, 1] Output: [0, 1, 2]

// function sortColors(nums) {
//   let low = 0,
//     mid = 0,
//     high = nums.length - 1;
//   while (mid <= high) {
//     if (nums[mid] === 0) {
//       [nums[low], nums[mid]] = [nums[mid], nums[low]];
//       low++;
//       mid++;
//     } else if (nums[mid] === 1) {
//       mid++;
//     } else {
//       [nums[mid], nums[high]] = [nums[high], nums[mid]];
//       high--;
//     }
//   }
// }

function sortColors(arr) {
  var arrC = [0, 0, 0];
  for (let item of arr) {
    arrC[item]++;
  }
  console.log(arrC);
  let index = 0;
  for (let i = 0; i < arrC[0]; i++) {
    arr[index++] = 0;
  }
  for (let i = 0; i < arrC[1]; i++) {
    arr[index++] = 1;
  }
  for (let i = 0; i < arrC[2]; i++) {
    arr[index++] = 2;
  }
  return arr;
}

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
