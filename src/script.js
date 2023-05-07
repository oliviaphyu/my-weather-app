//Display current Day and Time
function formatDate(curdate) {
    let hours = curdate.getHours();
    if (hours < 10) {
      hours = "0".concat(hours);
    }
    let minutes = curdate.getMinutes();
    if (minutes < 10) {
      minutes = "0".concat(minutes);
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[curdate.getDay()];
    let dateSentence = `${day} ${hours}:${minutes}`;
    return dateSentence;
  }
  
  let dateElement = document.querySelector("#date");
  let currentdate = new Date();
  dateElement.innerHTML = formatDate(currentdate);
  
function formatRandomDate(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
  
  // SheCodes Plus Week 5 Homework
  function displayCityTemp(response) {
    console.log(response);
    celciusTemp = response.data.main.temp;

    let setCity = document.querySelector("#city");
    setCity.innerHTML = response.data.name;
  
    let setTemp = document.querySelector("#temp");
    setTemp.innerHTML = Math.round(response.data.main.temp);
  
    let setDesc = document.querySelector("#desc");
    setDesc.innerHTML = response.data.weather[0].description;
  
    let humidity = document.querySelector("#humid");
    humidity.innerHTML = `${response.data.main.humidity} %`;
  
    let wind = document.querySelector("#wind");
    let windspeed = Math.round(response.data.wind.speed);
    wind.innerHTML = `${windspeed} km/h`;

    

    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src", 
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);

    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatRandomDate(response.data.dt * 1000);
  }
  
  function browseCity(getCity) {
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayCityTemp);
  }
  
  function handleCity(event) {
    event.preventDefault();
    let getCity = document.querySelector("#city-input").value;
    browseCity(getCity);
  }
  // I used button for search
  let btnSearch = document.querySelector("#btnSearch");
  btnSearch.addEventListener("click", handleCity);
  
  function getLocation(position) {
    //console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayCityTemp);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getLocation);
  }
  
  let btnLocation = document.querySelector("#btnLocation");
  btnLocation.addEventListener("click", getCurrentLocation);

   // Convert celcius to fahrenheit
  function celciusToFahrenheit(event) {
    clink.classList.remove("active");
    flink.classList.add("active");
    let tempElement = document.querySelector("#temp");
    let fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
    tempElement.innerHTML = Math.round(fahrenheitTemp);
  }
  
  let flink = document.querySelector("#flink");
  flink.addEventListener("click", celciusToFahrenheit);
  
  // Convert fahrenheit to Celcius
  function fahrenheitToCelcius(event) {
    clink.classList.add("active");
    flink.classList.remove("active");
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = Math.round(celciusTemp);
  }

  let celciusTemp = null;
  let clink = document.querySelector("#clink");
  clink.addEventListener("click", fahrenheitToCelcius);
  