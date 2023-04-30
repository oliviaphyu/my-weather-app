// Display current Day and Time
function formatDate(curdate){
    let hours = curdate.getHours();
    if(hours < 10){
      hours = "0".concat(hours);
    }
    let minutes = curdate.getMinutes();
    if(minutes < 10){
      minutes = "0".concat(minutes);
    }
  
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[curdate.getDay()];
    let dateSentence = `${day} ${hours}:${minutes}`;
    return dateSentence;
  }
  
  let dateElement = document.querySelector("#date");
  let currentdate = new Date();
  dateElement.innerHTML = formatDate(currentdate);
  
  // Display searched city 
  function searchCity(event){
    event.preventDefault();
    let oldCity = document.querySelector("#city");
    let newCity = document.querySelector("#city-input");
    oldCity.innerHTML = newCity.value;
    newCity.value = '';
  }
  // I used button for search
  let btnSearch = document.querySelector("#btnSearch");
  btnSearch.addEventListener("click", searchCity);
  
  
  
  // Convert celcius to fahrenheit
  function celciusToFahrenheit(event){
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = 66;
  }
  
  let flink = document.querySelector("#flink");
  flink.addEventListener("click", celciusToFahrenheit);
  
  
  
  // Convert fahrenheit to Celcius
  function fahrenheitToCelcius(event){
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = 19;
  }
  
  let clink = document.querySelector("#clink");
  clink.addEventListener("click", fahrenheitToCelcius);
  
  
  