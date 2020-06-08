$(document).ready(function() {
    var APIKey = "439e92f6d7e1138e446c2ddc9270862f";    
    // var queryURL = "http://api.openweathermap.org/data/2.5/onecall?=" + city +" &exclude=hourly,daily&appid=" + APIKey;
    var current = "api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid=" + APIKey;
    var forecast = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid=" + APIKey;



    $("#search-btn").on("click", function(event){
      event.preventDefault();
      newSearch=$("searchButton").val().trim().toLowerCase();
      console.log(newSearch);
    })



    // storedCities = JSON.parse(localStorage.getItem("cities"));

    // if (storedCities !== null) {
    //     city = storedCities[0].name;
    //     window.onload = currentCall(city)
    // };

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
  
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object
          console.log(response);
        })

        
    var icon = ("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
    // Transfer content to HTML
    $("#cityName").html("<h2>" + response.name +" ("+ currentDateEl +") "+ icon+"</h2>");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $(".humidity").text("Humidity: " + response.main.humidity+"%");

    // Converts the temp to Kelvin with the below formula
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $(".tempF").text("Temperature (Kelvin) " + tempF);

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + response.main.temp);

        
    

})