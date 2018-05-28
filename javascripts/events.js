const data = require('./data.js');

const addSearchEvent = () => {
  $('#search').on('keypress', searchWeather);
};

const searchWeather = (e) => {
  const inputValue = $('#search').val();
  if (e.key === 'Enter' && data.validateSearch(inputValue)) {
    // call promise function to grab info from API
    data.currentWeatherCall(inputValue);
    alert('YAY in the if');
  } else if (e.key === 'Enter' && !data.validateSearch(inputValue)) {
    alert('Not a valid Zip');
  }
};

module.exports = {
  addSearchEvent,
};
