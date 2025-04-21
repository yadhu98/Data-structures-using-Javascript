// Find the first and second largest elkement in an array;
var input = [3, 5, 7, 2, 8, -1, 4, 10, 12];

// Brute Force method

function findFirstAndSecondLargest(arr) {
  var firstLargest = arr[0];
  var secondLargest = arr[0];
  var resultantArray = [...arr];
  for (var i = 1; i < resultantArray.length; i++) {
    if (resultantArray[i] > firstLargest) {
      firstLargest = resultantArray[i];
      resultantArray.splice(i, 1);
    }
  }
  for (var i = 1; i < resultantArray.length; i++) {
    if (resultantArray[i] > secondLargest) {
      secondLargest = resultantArray[i];
    }
  }
  return {
    firstLargest: firstLargest,
    secondLargest: secondLargest,
  };
}

console.log(findFirstAndSecondLargest(input));
//second smallest element

var input = [3, 5, 7, 2, 8, -1, 4, 10, 12];

function secondSmallestElement(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
}

function secondSmallest(arr) {
  if (arr.length < 2) {
    return null; // Edge case: If the array has fewer than 2 elements
  }

  let min1 = Infinity,
    min2 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2 && arr[i] !== min1) {
      min2 = arr[i];
    }
  }

  return min2 === Infinity ? null : min2; // Return null if no second smallest exists
}

secondSmallestElement(input);
console.log(secondSmallest(input));
