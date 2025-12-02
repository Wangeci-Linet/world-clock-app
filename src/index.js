function displayedCity() {}

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
setInterval(function displayedCity() {
  nairobiCityTimeElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
displayedCity();

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
setInterval(function displayedCity() {
  johannesburgCityTimeElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
displayedCity();

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
setInterval(function displayedCity() {
  romeCityTimeElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
displayedCity();
