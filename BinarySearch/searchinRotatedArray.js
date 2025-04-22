// nums = [4, 5, 6, 7, 0, 1, 2], target = 0

function searchInRotatedArray(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (num[low] <= num[mid]) {
      if (arr[low] <= target && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
