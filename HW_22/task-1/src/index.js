import "./index.scss";

const app = document.querySelector(".app");
const form = document.querySelector("form");
const upperPart = document.querySelector("#upperCityInfo");
const lowerPart = document.querySelector("#innerPart");

async function getWeather(name) {
  try {
    const token = "OWM_TOKEN";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${token}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    alert("This city doesnt exist :(");
    return null;
  }
}

function updateWeather(object) {
  if (!object) return;

  upperPart.children.cityName.innerText = object.name;
  upperPart.children.cityTemperature.innerText = `${Math.round(
    object.main.temp - 273.15
  )}°C`;

  lowerPart.children.wind.lastElementChild.innerText = `${Math.round(
    object.wind.speed
  )}M/s`;
  lowerPart.children.humidity.lastElementChild.innerText = `${Math.round(
    object.main.humidity
  )}%`;
  lowerPart.children.cloud.lastElementChild.innerText = `${Math.round(
    object.clouds.all
  )} oktas`;
  app.className = "app weatherPage";

  if (object.weather[0].description.includes("rain")) {
    app.classList.add("rain");
  } else if (object.weather[0].description.includes("clear")) {
    app.classList.add("clear");
  } else if (object.weather[0].description.includes("cloud")) {
    app.classList.add("cloud");
  } else if (
    object.weather[0].description.includes("mist") ||
    object.weather[0].description.includes("haze")
  ) {
    app.classList.add("fog");
  } else {
    app.classList.add("idk");
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputValue = form.elements.cityName.value;
  const weather = await getWeather(inputValue);

  if (weather) {
    app.classList.add("weatherPage");
    updateWeather(weather);
  }
});
