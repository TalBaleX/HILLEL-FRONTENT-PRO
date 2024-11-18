const number = prompt("Введи якесь число");

const countNumber = (num, digit) => num.split(digit).length - 1;

if (number.length === 3) {
  if (countNumber(number, number[0]) > 1 || countNumber(number, number[1]) > 1) {
    alert("У числі є однакові цифри");

    if (countNumber(number, number[0]) === 3) {
      alert("Вони також всі однакові");
    }
  } else {
    alert("У числі немає однакових цифр");
  }
} else {
  alert("Будь ласка, введіть тризначне число.");
}
