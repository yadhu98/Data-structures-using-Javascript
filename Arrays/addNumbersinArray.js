let arr = [1, 2, 3, 4, 5];

Array.prototype.sumOfElementsArray = function () {
  let array = this;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
};

arr.sumOfElementsArray();

arr.reduce((sum, current) => sum + current);
