let now = new Date();
console.log(now);

console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

let h2 = document.querySelector("h2");
let currentDay = now.getDay();
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let currentSeconds = now.getSeconds();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

h2.innerHTML = `${day} ${currentHour}:${currentMinutes}`;

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "be66d3ea7e34942cbb03a9801e27da36";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#form-search");

form.addEventListener("submit", search);
