const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const currentWeatherBuilder = (currentWeather) => {
  let stringToPrint = '';
  stringToPrint += `<div class="row">`;
  stringToPrint += `<div class="col-sm-6 col-md-4 col-md-offset-4 weather-div">`;
  stringToPrint +=   `<div class="thumbnail weather">`;
  stringToPrint +=    `<div class='col-md-offset-10 btn-group' data-toggle="buttons">`;
  stringToPrint +=      `<label class="btn btn-danger checkbox"><i class="far fa-frown fa-2x"><input type="checkbox" autocomplete="off"></i></label>`;
  stringToPrint +=    `</div>`;
  stringToPrint +=     `<div class="caption">`;
  stringToPrint +=       `<h3 class='name' data-name='${currentWeather.name}'>${currentWeather.name}<img class='weather-icon' data-icon="${currentWeather.weather[0].icon}" src="https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png"></h3>`;
  stringToPrint +=       `<h4 class='temp' data-temp='${currentWeather.main.temp}'>Temperature: ${currentWeather.main.temp} Kelvin</h4>`;
  stringToPrint +=       `<h4 class='description' data-description='${currentWeather.weather[0].description}'>Conditions: ${currentWeather.weather[0].description}</h4>`;
  stringToPrint +=       `<h4 class='pressure' data-pressure='${currentWeather.main.pressure}'>Air Pressure: ${currentWeather.main.pressure} Pa</h4>`;
  stringToPrint +=       `<h4 class='speed' data-speed='${currentWeather.wind.speed}'>Wind Speed: ${currentWeather.wind.speed} Knots</h4>`;
  stringToPrint +=       `<div class="btn-group forecast-group" role="group" aria-label="...">`;
  stringToPrint +=       `<button class="btn btn-primary five-day" role="button">5 Day Forecast</button>`;
  stringToPrint +=       `<button class="btn btn-primary three-day" role="button">3 Day Forecast</button>`;
  stringToPrint +=       `<button class="btn btn-primary save-me" role="button">Save Forecast</button>`;
  stringToPrint +=       `</div>`;
  stringToPrint +=     `</div>`;
  stringToPrint +=   `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;
  printToDom('#weather-container', stringToPrint);
};

const fiveDayBuilder = (data) => {
  let stringToPrint = '';
  stringToPrint += `<div class="row">`;
  data.list.forEach((item, i) => {
    if (i % 8 === 0) {
      stringToPrint += `<div class="col-sm-6 col-md-4 weather-div">`;
      stringToPrint +=   `<div class="thumbnail weather">`;
      stringToPrint +=    `<div class='col-md-offset-10 btn-group' data-toggle="buttons">`;
      stringToPrint +=      `<label class="btn btn-danger checkbox"><i class="far fa-frown fa-2x"><input type="checkbox" autocomplete="off"></i></label>`;
      stringToPrint +=    `</div>`;
      stringToPrint +=     `<div class="caption">`;
      stringToPrint +=       `<h3 class='name' data-name='${data.city.name}'>${data.city.name}<img class='weather-icon' data-icon="${item.weather[0].icon}" src="https://openweathermap.org/img/w/${item.weather[0].icon}.png"></h3>`;
      stringToPrint +=       `<h4 class='date' data-date='${item.dt_txt}'>Date and Time: ${item.dt_txt}</h4>`;
      stringToPrint +=       `<h4 class='temp' data-temp='${item.main.temp}'>Temperature: ${item.main.temp} Kelvin</h4>`;
      stringToPrint +=       `<h4 class='description' data-description='${item.weather[0].description}'>Conditions: ${item.weather[0].description}</h4>`;
      stringToPrint +=       `<h4 class='pressure' data-pressure='${item.main.pressure}'>Air Pressure: ${item.main.pressure} Pa</h4>`;
      stringToPrint +=       `<h4 class='speed' data-speed='${item.wind.speed}'>Wind Speed: ${item.wind.speed} Knots</h4>`;
      stringToPrint +=       `<div class="btn-group forecast-group" role="group" aria-label="...">`;
      stringToPrint +=       `<button class="btn btn-primary three-day" role="button">3 Day Forecast</button>`;
      stringToPrint +=       `<button class="btn btn-primary save-me" role="button">Save Forecast</button>`;
      stringToPrint +=       `</div>`;
      stringToPrint +=     `</div>`;
      stringToPrint +=   `</div>`;
      stringToPrint += `</div>`;
    }
  });
  stringToPrint += `</div>`;
  printToDom('#weather-container', stringToPrint);
};

const threeDayBuilder = (data) => {
  let stringToPrint = '';
  stringToPrint += `<div class="row">`;
  data.list.forEach((item, i) => {
    if (i % 8 === 0 && i < 17) {
      stringToPrint += `<div class="col-sm-6 col-md-4 weather-div">`;
      stringToPrint +=   `<div class="thumbnail weather">`;
      stringToPrint +=    `<div class='col-md-offset-10 btn-group' data-toggle="buttons">`;
      stringToPrint +=      `<label class="btn btn-danger checkbox"><i class="far fa-frown fa-2x"><input type="checkbox" autocomplete="off"></i></label>`;
      stringToPrint +=    `</div>`;
      stringToPrint +=     `<div class="caption">`;
      stringToPrint +=       `<h3 class='name' data-name='${data.city.name}'>${data.city.name}<img class='weather-icon' data-icon="${item.weather[0].icon}" src="https://openweathermap.org/img/w/${item.weather[0].icon}.png"></h3>`;
      stringToPrint +=       `<h4 class='date' data-date='${item.dt_txt}'>Date and Time: ${item.dt_txt}</h4>`;
      stringToPrint +=       `<h4 class='temp' data-temp='${item.main.temp}'>Temperature: ${item.main.temp} Kelvin</h4>`;
      stringToPrint +=       `<h4 class='description' data-description='${item.weather[0].description}'>Conditions: ${item.weather[0].description}</h4>`;
      stringToPrint +=       `<h4 class='pressure' data-pressure='${item.main.pressure}'>Air Pressure: ${item.main.pressure} Pa</h4>`;
      stringToPrint +=       `<h4 class='speed' data-speed='${item.wind.speed}'>Wind Speed: ${item.wind.speed} Knots</h4>`;
      stringToPrint +=       `<div class="btn-group forecast-group" role="group" aria-label="...">`;
      stringToPrint +=       `<button class="btn btn-primary five-day" role="button">5 Day Forecast</button>`;
      stringToPrint +=       `<button class="btn btn-primary save-me" role="button">Save Forecast</button>`;
      stringToPrint +=       `</div>`;
      stringToPrint +=     `</div>`;
      stringToPrint +=   `</div>`;
      stringToPrint += `</div>`;
    }
  });
  stringToPrint += `</div>`;
  printToDom('#weather-container', stringToPrint);
};

const savedForecastsBuilder = (forecastsArray) => {
  console.log('Forecasts Array: ', forecastsArray);
  let stringToPrint = '';
  forecastsArray.forEach((item) => {
    stringToPrint += `<div class="col-sm-6 col-md-4 weather-div">`;
    if (item.isScarry) {
      stringToPrint +=   `<div data-id='${item.id}' class="thumbnail weather red">`;
    } else {
      stringToPrint +=   `<div data-id='${item.id}' class="thumbnail weather">`;
    }
    stringToPrint +=    `<div class='col-md-offset-9 btn-group' data-toggle="buttons">`;
    stringToPrint +=      `<label class="btn btn-danger checkbox"><i class="far fa-frown fa-2x"><input type="checkbox" autocomplete="off"></i></label>`;
    stringToPrint +=    `</div>`;
    stringToPrint +=     `<div class="caption">`;
    stringToPrint +=       `<h3 class='name' data-name='${item.name}'>${item.name} <img class='weather-icon' data-icon="${item.icon}" src="https://openweathermap.org/img/w/${item.icon}.png"></h3>`;
    if (item.date) {
      stringToPrint +=       `<h4 class='date' data-date='${item.date}'>Date and Time: ${item.date}</h4>`;
    }
    stringToPrint +=       `<h4 class='temp' data-temp='${item.temp}'>Temperature: ${item.temp} Kelvin</h4>`;
    stringToPrint +=       `<h4 class='description' data-description='${item.description}'>Conditions: ${item.description}</h4>`;
    stringToPrint +=       `<h4 class='pressure' data-pressure='${item.pressure}'>Air Pressure: ${item.pressure} Pa</h4>`;
    stringToPrint +=       `<h4 class='speed' data-speed='${item.speed}'>Wind Speed: ${item.speed} Knots</h4>`;
    stringToPrint +=       `<p><a class="btn btn-primary delete-me" role="button">Delete</a></p>`;
    stringToPrint +=     `</div>`;
    stringToPrint +=   `</div>`;
    stringToPrint += `</div>`;
  });
  printToDom('#weather-container', stringToPrint);
};

module.exports = {
  currentWeatherBuilder,
  fiveDayBuilder,
  savedForecastsBuilder,
  threeDayBuilder,
};
