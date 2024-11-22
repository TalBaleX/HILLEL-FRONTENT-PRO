let resume = true;
let easyNum = true;
while (resume == true) {
  resume = true;
  easyNum = true;

  const int = prompt("Введіть ціле число");
  if (int != null) {
    for (let i = int - 1; i > 1; i--) {
      if (int % i == 0) {
        easyNum = false;
        break;
      }
    }
    alert(easyNum ? "Так, це просте число" : "Нє, не просте");
    resume = confirm("Дальше?");
  } else {
    resume = false;
  }
}
