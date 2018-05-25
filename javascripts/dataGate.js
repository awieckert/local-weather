const events = require('./events.js');

const initializer = () => {
  events.addSearchEvent();
};

module.exports = {
  initializer,
};
