let array = [1, 2, 3, 2, 4, 2];

function countDuplicates(arr) {
  let Obj = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    Obj = { ...Obj, [arr[i]]: count };
    count = 0;
  }
  console.log(Obj);
}

countDuplicates(array);
