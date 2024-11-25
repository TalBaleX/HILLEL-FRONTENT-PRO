const array = [1, 2, 3, 4, 5, 6, 7, 4];

function removeElement(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      for (i; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
    }
  }
  arr.length = arr.length - 1;
  return arr;
}

removeElement(array, 4);

console.log(array);
