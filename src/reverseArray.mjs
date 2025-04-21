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
