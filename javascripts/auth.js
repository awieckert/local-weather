const {setUID,} = require('./firebaseAPI.js');
// const {getSavedForecasts,} = require('./events.js');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
    } else {
      $('#search-bar, #register-form, #logOut').addClass('hide');
      $('#login-form').removeClass('hide');
      $('#weather-container').html('');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
