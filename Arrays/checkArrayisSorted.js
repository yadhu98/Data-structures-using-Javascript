let array = [1, 3, 2, 4, 5];

Array.prototype.isSorted = function () {
  let arr = this;
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
};

console.log(array.isSorted());
