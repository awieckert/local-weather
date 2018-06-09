const events = require('./events.js');
const weatherAPI = require('./weatherAPI.js');
const {checkLoginStatus,} = require('./auth.js');
const firebaseAPI = require('./firebaseAPI.js');

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
    weatherAPI.setWeatherAPIKey(data.apiKey);
    firebaseAPI.setFirebaseConfig(data.firebase);
    firebase.initializeApp(data.firebase);
    checkLoginStatus();
  }).catch((err) => {
    console.error('POOP an Error!: ', err);
  });
};

const initializer = () => {
  events.addSearchEvent();
  setApiKey();
  // console.log('Weather API key from DataGate: ', data.getKey());
  events.add5DayEvent();
  events.addSaveMeEvents();
  events.addSavedForecastsEvent();
  events.addDeleteEvent();
  events.addCheckBoxEvent();
  events.add3DayEvent();
  events.addShowRegisterEvent();
  events.addLogInEvent();
  events.addCreateAccountEvent();
  events.addLogOutEvent();
};

module.exports = {
  initializer,
};
