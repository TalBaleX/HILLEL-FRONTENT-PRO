function hundredCycle() {
  let i = 0;
  let num = +prompt("Слухай, а введи мені якесь число більше 100");
  while ((isNaN(num) || num < 100) && i !== 9) {
    i++;
    num = prompt("Нєєє, ну це не то, введи ще раз");
  }
  console.log(num);
}
hundredCycle();
