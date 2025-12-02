function displayedCity() {
  // Nairobi
  let nairobiCityElement = document.querySelector("#nairobi");
  let nairobiCityDateElement = nairobiCityElement.querySelector(".date");
  let nairobiCityTimeElement = nairobiCityElement.querySelector(".time");
  nairobiCityDateElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("MMMM Do YYYY");
  nairobiCityTimeElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("h:mm:ss [<small>]A[</small>]");

  // Johannesburg
  let johannesburgCityElement = document.querySelector("#johannesburg");
  let johannesburgCityDateElement =
    johannesburgCityElement.querySelector(".date");
  let johannesburgCityTimeElement =
    johannesburgCityElement.querySelector(".time");
  johannesburgCityDateElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("MMMM Do YYYY");
  johannesburgCityTimeElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("h:mm:ss [<small>]A[</small>]");

  // Rome
  let romeCityElement = document.querySelector("#rome");
  let romeCityDateElement = romeCityElement.querySelector(".date");
  let romeCityTimeElement = romeCityElement.querySelector(".time");
  romeCityDateElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("MMMM Do YYYY");
  romeCityTimeElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("h:mm:ss [<small>]A[</small>]");
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
  </div>
  <a href="/">Back to all cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", selectedCity);

setInterval(displayedCity, 1000);
selectedCity();
displayedCity();
