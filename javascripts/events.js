const data = require('./data.js');

const addSearchEvent = () => {
  $('#search').on('keypress', searchWeather);
};

const add5DayEvent = () => {
  $('body').on('click', '#five-day', fiveDayForcastCall);
};

const fiveDayForcastCall = () => {
  data.fiveDayForecast();
};

const searchWeather = (e) => {
  const inputValue = $('#search').val();
  if (e.key === 'Enter' && data.validateSearch(inputValue)) {
    // call promise function to grab info from API
    data.currentWeatherCall(inputValue);
  } else if (e.key === 'Enter' && !data.validateSearch(inputValue)) {
    alert('Not a valid Zip');
  }
};

module.exports = {
  addSearchEvent,
  add5DayEvent,
};
