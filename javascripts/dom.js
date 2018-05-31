const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const currentWeatherBuilder = (currentWeather) => {
  let stringToPrint = '';
  stringToPrint += `<div class="row">`;
  stringToPrint += `<div class="col-sm-6 col-md-4 col-md-offset-4">`;
  stringToPrint +=   `<div class="thumbnail">`;
  stringToPrint +=     `<div class="caption">`;
  stringToPrint +=       `<h3>${currentWeather.name}</h3>`;
  stringToPrint +=       `<h4>Temperature: ${currentWeather.main.temp} Kelvin</h4>`;
  stringToPrint +=       `<h4>Conditions: ${currentWeather.weather[0].description}</h4>`;
  stringToPrint +=       `<h4>Air Pressure: ${currentWeather.main.pressure} Pa</h4>`;
  stringToPrint +=       `<h4>Wind Speed: ${currentWeather.wind.speed} Knots</h4>`;
  stringToPrint +=       `<p><a href="#" id='five-day' class="btn btn-primary" role="button">5 Day Forecast</a></p>`;
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
      stringToPrint += `<div class="col-sm-6 col-md-4">`;
      stringToPrint +=   `<div class="thumbnail">`;
      stringToPrint +=     `<div class="caption">`;
      stringToPrint +=       `<h3>${data.city.name}</h3>`;
      stringToPrint +=       `<h4>Date and Time: ${item.dt_txt}</h4>`;
      stringToPrint +=       `<h4>Temperature: ${item.main.temp} Kelvin</h4>`;
      stringToPrint +=       `<h4>Conditions: ${item.weather[0].description}</h4>`;
      stringToPrint +=       `<h4>Air Pressure: ${item.main.pressure} Pa</h4>`;
      stringToPrint +=       `<h4>Wind Speed: ${item.wind.speed} Knots</h4>`;
      stringToPrint +=       `<p><a href="#" id='five-day' class="btn btn-primary" role="button">5 Day Forecast</a></p>`;
      stringToPrint +=     `</div>`;
      stringToPrint +=   `</div>`;
      stringToPrint += `</div>`;
    }
  });
  stringToPrint += `</div>`;
  printToDom('#weather-container', stringToPrint);
};

module.exports = {
  currentWeatherBuilder,
  fiveDayBuilder,
};
