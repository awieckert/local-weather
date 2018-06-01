const data = require('./data.js');
const firebaseAPI = require('./firebaseAPI.js');
const dom = require('./dom.js');

const addSaveMeEvents = () => {
  $('body').on('click', '.save-me', saveToFirebase);
};

const addSavedForecastsEvent = () => {
  $('#saved').on('click', getSavedForecasts);
};

const addSearchEvent = () => {
  $('#search').on('keypress', searchWeather);
};

const add5DayEvent = () => {
  $('body').on('click', '#five-day', fiveDayForcastCall);
};

const addDeleteEvent = () => {
  $('body').on('click', '.delete-me', deleteFromFirebase);
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

const saveToFirebase = (e) => {
  const forecastToSave = {};
  const targetForecast = $(e.target).closest('.weather');
  forecastToSave.name = targetForecast.find('.name').data('name');
  forecastToSave.temp = targetForecast.find('.temp').data('temp');
  forecastToSave.description = targetForecast.find('.description').data('description');
  forecastToSave.pressure = targetForecast.find('.pressure').data('pressure');
  forecastToSave.speed = targetForecast.find('.speed').data('speed');
  forecastToSave.date = targetForecast.find('.date').data('date');

  firebaseAPI.saveForecast(forecastToSave);
};

const getSavedForecasts = () => {
  firebaseAPI.grabSavedForecasts().then((forecastArray) => {
    dom.savedForecastsBuilder(forecastArray);
  }).catch((err) => {
    console.error('Poop butt no forecasts: ', err);
  });
};

const deleteFromFirebase = (e) => {
  const forecastTarget = $(e.target).closest('.weather');
  const forecastToDelete = forecastTarget.data('id');
  firebaseAPI.deleteStuff(forecastToDelete).then(() => {
    getSavedForecasts();
  }).catch((err) => {
    console.error('Delete Error: ', err);
  });
};

module.exports = {
  addSearchEvent,
  add5DayEvent,
  addSaveMeEvents,
  addSavedForecastsEvent,
  addDeleteEvent,
};
