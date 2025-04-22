//find closes element in array of given target

function closestElement(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (target - arr[right] > target - arr[left]) {
    return arr[left];
  } else {
    return arr[right];
  }
}

let array = [1, 3, 5, 8, 12, 15];
let tar = 7;

console.log(closestElement(array, tar));
