let array = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicate(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(removeDuplicate(array));
