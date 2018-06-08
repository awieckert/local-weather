const {setUID,} = require('./firebaseAPI.js');
// const {getSavedForecasts,} = require('./events.js');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
    } else {

    }
  });
};

module.exports = {
  checkLoginStatus,
};
