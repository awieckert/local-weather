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
    $.ajax({
      method: 'POST',
      url: `${data.firebaseConfig.databaseURL}/saveForecasts.json`,
      data: JSON.stringify(newForecast),
    }).done((uniqueKey) => {
      resolve(uniqueKey);
    }).fail((err) => {
      reject(err);
    });
  });
};

module.exports = {
  saveForecast,
};
