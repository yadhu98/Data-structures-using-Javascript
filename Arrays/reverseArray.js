const arr = [1, 2, 3, 4, 5];

Array.prototype.reverseArray = function () {
  let array = this;
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log(newArray);
};
arr.reverseArray();
const arr1 = [1, 2, 3, 4, 5];

function efficientReverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  if (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left += 1;
    right -= 1;
  }
  return array;
}

console.log(efficientReverseArray(arr1));
