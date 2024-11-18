function getUserInfo() {
  let birthYear = prompt("Введіть свій рік народження:");

  if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свою дату народження.");
    return;
  }

  let city = prompt("В якому місті ви живете?");

  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
    return;
  }

  let sport = prompt("Який ваш улюблений вид спорту?");

  if (sport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    return;
  }

  const currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  let cityMessage = "ти живеш у місті " + city;
  if (city === "Київ") {
    cityMessage = "Ти живеш у столиці України!";
  } else if (city === "Вашингтон") {
    cityMessage = "Ти живеш у столиці США!";
  } else if (city === "Лондон") {
    cityMessage = "Ти живеш у столиці Великої Британії!";
  }

  let sportMessage = "";
  if (sport === "футбол") {
    sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
  } else if (sport === "теніс") {
    sportMessage = "Круто! Хочеш стати Новаком Джоковичем?";
  } else if (sport === "баскетбол") {
    sportMessage = "Круто! Хочеш стати Майклом Джорданом?";
  }

  alert(`Ваш вік: ${age} років. \n${cityMessage} \n${sportMessage}`);
}
