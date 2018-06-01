// let firebaseConfig = {};

// const setFirebaseConfig = (config) => {
//   firebaseConfig = config;
// };

// const getFirebaseConfig = () => {
//   return firebaseConfig;
// };

// module.exports = {
//   setFirebaseConfig,
//   getFirebaseConfig,
// };

const data = require('./data.js');

const saveForecast = (newForecast) => {
  return new Promise ((resolve, reject) => {
    const firebaseConfig = data.getFirebaseConfig();
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
  const firebaseConfig = data.getFirebaseConfig();
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/saveForecasts.json`,
    }).done((data) => {
      Object.keys(data).forEach((key) => {
        data[key].id = key;
        savedForecastArray.push(data[key]);
      });
      resolve(savedForecastArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

module.exports = {
  saveForecast,
  grabSavedForecasts,
};
