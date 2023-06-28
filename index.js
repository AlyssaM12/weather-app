function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("h3");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

//Change Weather

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let city = document.querySelector("h1");
  city.innerHTML = `${searchInput.value}`;

  let apiKey = "85688cbdc697f06f49c7159e2c3b2af2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response) {
  let weatherChange = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);

  weatherChange.innerHTML = temperature;
}
