const dom = require('./dom.js');

let apiWeatherKey = '';

// Get and set API Keys

const setWeatherAPIKey = (key) => {
  apiWeatherKey = key;
};

const getWeatherKey = () => {
  return apiWeatherKey;
};

const currentWeather = (searchText) => {
  return new Promise ((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?zip=${searchText},us&appid=${apiWeatherKey}`).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const currentWeatherCall = (zipCode) => {
  currentWeather(zipCode).then((data) => {
    dom.currentWeatherBuilder(data);
  }).catch((err) => {
    console.error('Poop Error: ', err);
  });
};

// Five Day Weather Promise

const fiveDayWeather = () => {
  const zipCode5Day = $('#search').val();
  return new Promise ((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode5Day},us&appid=${apiWeatherKey}`).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

// Makes the call to API for Five Day forecast

const fiveDayForecast = () => {
  fiveDayWeather().then((data) => {
    dom.fiveDayBuilder(data);
  }).catch((err) => {
    console.error('Poop Error: ', err);
  });
};

const threeDayWeather = () => {
  const zipCode3Day = $('#search').val();
  return new Promise ((resolve, reject) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode3Day},us&appid=${apiWeatherKey}`).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const threeDayForecast = () => {
  threeDayWeather().then((data) => {
    dom.threeDayBuilder(data);
  }).catch((err) => {
    console.error('Poop Error: ', err);
  });
};

module.exports = {
  currentWeatherCall,
  fiveDayForecast,
  threeDayForecast,
  setWeatherAPIKey,
  getWeatherKey,
};
