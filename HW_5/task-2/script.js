const eur = 1;
const uah = 0.023;
const usd = 0.95;
let errors = [];

const fc = prompt("Введіть першу валюту \n (EUR, UAH, USD)");
const sc = prompt("Введіть другу валюту \n (EUR, UAH, USD)");
let firstCurrency, secondCurrency;

switch (fc) {
  case "EUR":
    firstCurrency = eur;
    break;
  case "UAH":
    firstCurrency = uah;
    break;
  case "USD":
    firstCurrency = usd;
    break;
  default:
    errors.push("Шось не так, оновлюй сторінку та перероблюй");
}
switch (sc) {
  case "EUR":
    secondCurrency = eur;
    break;
  case "UAH":
    secondCurrency = uah;
    break;
  case "USD":
    secondCurrency = usd;
    break;
  default:
    errors.push("Шось не так, оновлюй сторінку та перероблюй");
}
if (errors.length == 0) {
  for (let i = 10; i <= 100; i += 10) {
    console.log(
      `${i} ${fc} equals ${((firstCurrency / secondCurrency) * i).toFixed(
        2
      )} ${sc}`
    );
  }
} else {
  console.log(errors[0]);
}
