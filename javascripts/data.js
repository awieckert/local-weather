let apiKey = '';

const setKey = (key) => {
  apiKey = key;
};

const getKey = () => {
  return apiKey;
};

const validateSearch = (input) => {
  const checkedInput = /^\d+$/.test(input);
  if (checkedInput && input.length === 5) {
    return true;
  } else {
    return false;
  }
};

const getApiKey = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/apiKeys.json').done((data) => {
      resolve(data.apiKey);
    }).fail((err) => {
      reject(err);
    });
  });
};

const setApiKey = () => {
  getApiKey().then((data) => {
    setKey(data);
  }).catch((err) => {
    console.error('POOP an Error!: ', err);
  });
};

// make an ajax request to the API

const currentWeather = (searchText) => {
  return new Promise ((resolve, reject) => {
    $.ajax(`api.openweathermap.org/data/2.5/weather?zip=${searchText},us&appid=${apiKey}`).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const currentWeatherCall = () => {
  currentWeather().then((data) => {
    dom.printToDom(data);
  }).catch((err) => {
    console.error('Poop Error: ', err);
  })
};

module.exports = {
  validateSearch,
  setApiKey,
};
