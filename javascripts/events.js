const data = require('./data.js');
const firebaseAPI = require('./firebaseAPI.js');
const dom = require('./dom.js');

const addCheckBoxEvent = () => {
  $('body').on('click', '.checkbox', checkBoxEvent);
};

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
  $('body').on('click', '.five-day', fiveDayForecastCall);
};

const add3DayEvent = () => {
  $('body').on('click', '.three-day', threeDayForecastCall);
};

const addDeleteEvent = () => {
  $('body').on('click', '.delete-me', deleteFromFirebase);
};

const fiveDayForecastCall = () => {
  data.fiveDayForecast();
};

const threeDayForecastCall = () => {
  data.threeDayForecast();
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
  forecastToSave.icon = targetForecast.find('img').data('icon');

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

const checkBoxEvent = (e) => {
  const weatherCard = $(e.target).closest('.weather');
  const labelToCheck = weatherCard.find('label');
  const forecastToUpdate = {};

  forecastToUpdate.name = weatherCard.find('.name').data('name');
  forecastToUpdate.temp = weatherCard.find('.temp').data('temp');
  forecastToUpdate.description = weatherCard.find('.description').data('description');
  forecastToUpdate.pressure = weatherCard.find('.pressure').data('pressure');
  forecastToUpdate.speed = weatherCard.find('.speed').data('speed');
  forecastToUpdate.date = weatherCard.find('.date').data('date');
  forecastToUpdate.icon = weatherCard.find('img').data('icon');
  forecastToUpdate.id = weatherCard.data('id');
  forecastToUpdate.isScarry = false;

  if ($(labelToCheck).hasClass('active')) {
    // need to send modified weather object to firebase here
    forecastToUpdate.isScarry = false;
    $(weatherCard).removeClass('red');
    firebaseAPI.updateForecast(forecastToUpdate);
  } else {
    // need to send modified weather object to firebase here
    forecastToUpdate.isScarry = true;
    $(weatherCard).addClass('red');
    firebaseAPI.updateForecast(forecastToUpdate);
  }
};

// Add Event to Log-in Button

const addLogInEvent = () => {
  $('#login-button').on('click', signInUser);
};

// Call to firebase. User Sign in

const signInUser = (e) => {
  e.preventDefault();
  const email = $('#loginEmail').val();
  const password = $('#loginPassword').val();
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    getSavedForecasts();
    $('#login-form').addClass('hide');
  }).catch((error) => {
    const errorMessage = error.message;
    console.error('Sign In Error: ', errorMessage);
  });
};

const addShowRegisterEvent = () => {
  $('#register-link').on('click', showRegistration);
  $('#login-link').on('click', showLogIn);
};

const showLogIn = () => {
  $('#login-form').removeClass('hide');
  $('#register-form').addClass('hide');
};

const showRegistration = () => {
  $('#login-form').addClass('hide');
  $('#register-form').removeClass('hide');
};

const addCreateAccountEvent = () => {
  $('#register-submit').on('click', (e) => {
    e.preventDefault();
    const email = $('#registerEmail').val();
    const password = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Create Account Error: ', errorMessage, ' ', errorCode);
    });
  });
};

// const createAccount = (e) => {
//   e.preventDefault();
//   const email = $('#registerEmail').val();
//   const password = $('#registerPassword').val();
//   firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
//     $('#registerEmail').val('');
//     $('#registerPassword').val('');
//     $('#register-form').addClass('hide');
//     $('#login-form').removeClass('hide');
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error('Create Account Error: ', errorMessage, ' ', errorCode);
//   });
// };

module.exports = {
  addSearchEvent,
  add5DayEvent,
  addSaveMeEvents,
  addSavedForecastsEvent,
  addDeleteEvent,
  addCheckBoxEvent,
  add3DayEvent,
  addLogInEvent,
  addShowRegisterEvent,
  addCreateAccountEvent,
};
