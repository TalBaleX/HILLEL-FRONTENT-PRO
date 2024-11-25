const example = ["string", "one more string", 12, false, 10];

function average(arr) {
  let numbers, quantity;
  numbers = quantity = 0;

  for (const el of arr) {
    if (typeof el == "number") {
      numbers += el;
      quantity++;
    }
  }
  return numbers / quantity;
}
alert(average(example));
