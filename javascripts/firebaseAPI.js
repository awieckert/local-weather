const dom = require('./dom.js');

let firebaseConfig = {};
let uid = '';

const setFirebaseConfig = (config) => {
  firebaseConfig = config;
};

const getFirebaseConfig = () => {
  return firebaseConfig;
};

const setUID = (userID) => {
  uid = userID;
};

const getUID = () => {
  return uid;
};

const saveForecast = (newForecast) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/saveForecasts.json`,
      data: JSON.stringify(newForecast),
    }).done((uniqueKey) => {
      resolve(uniqueKey);
    }).fail((err) => {
      reject(err);
    });
  });
};

const grabSavedForecasts = () => {
  const savedForecastArray = [];
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/saveForecasts.json?orderBy="uid"&equalTo="${uid}"`,
    }).done((data) => {
      if (data !== null) {
        Object.keys(data).forEach((key) => {
          data[key].id = key;
          savedForecastArray.push(data[key]);
        });
      }
      resolve(savedForecastArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

const grabSavedForecastsCall = () => {
  grabSavedForecasts().then((forecastsArray) => {
    dom.savedForecastsBuilder(forecastsArray);
  }).catch((err) => {
    console.error('Getting the saved forecasts failed: ', err);
  });
};

const deleteStuff = (forecastToDelete) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/saveForecasts/${forecastToDelete}.json`,
    }).done((thisWillBeNull) => {
      resolve(thisWillBeNull);
    }).fail((err) => {
      reject(err);
    });
  });
};

const updateForecast = (modifiedObject) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: `PUT`,
      url: `${firebaseConfig.databaseURL}/saveForecasts/${modifiedObject.id}.json`,
      data: JSON.stringify(modifiedObject),
    }).done((uniqueKey) => {
      resolve(uniqueKey);
    }).fail((err) => {
      reject(err);
    });
  });
};

module.exports = {
  saveForecast,
  grabSavedForecasts,
  deleteStuff,
  updateForecast,
  setUID,
  getUID,
  setFirebaseConfig,
  getFirebaseConfig,
  grabSavedForecastsCall,
};
