const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {
  let newArray = arr.filter((num) => num % 2 == 0);
  return newArray;
}

const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]
