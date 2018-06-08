const dom = require('./dom.js');
// const {checkLoginStatus,} = require('./auth.js');
// const firebaseAPI = require('./firebaseAPI.js');

let apiKey = '';
let firebaseConfig = {};

// Get and set API Keys

const setKey = (key) => {
  apiKey = key;
};

const setFirebaseConfig = (config) => {
  firebaseConfig = config;
};

const getFirebaseConfig = () => {
  return firebaseConfig;
};

const getKey = () => {
  return apiKey;
};

// Validate Search ---- is US Zip Code

const validateSearch = (input) => {
  const checkedInput = /^\d+$/.test(input);
  if (checkedInput && input.length === 5) {
    return true;
  } else {
    return false;
  }
};

// Grabs API Data from apiKeys.json

const getApiKey = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/apiKeys.json').done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

// Sets the API keys to variables in this file. Initializes Firebase

const setApiKey = () => {
  getApiKey().then((data) => {
    console.log('Api Data in Data.js: ', data);
    setKey(data.apiKey);
    setFirebaseConfig(data.firebase);
    firebase.initializeApp(firebaseConfig);
    // checkLoginStatus();
  }).catch((err) => {
    console.error('POOP an Error!: ', err);
  });
};

// make an ajax request to the API

const currentWeather = (searchText) => {
  return new Promise ((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${searchText},us&appid=${apiKey}`).done((data) => {
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
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode5Day},us&appid=${apiKey}`).done((data) => {
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
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode3Day},us&appid=${apiKey}`).done((data) => {
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
  validateSearch,
  setApiKey,
  getKey,
  currentWeatherCall,
  getFirebaseConfig,
  fiveDayForecast,
  threeDayForecast,
};
