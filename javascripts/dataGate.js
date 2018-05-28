const events = require('./events.js');
const data = require('./data.js');

const initializer = () => {
  events.addSearchEvent();
  data.setApiKey();
};

module.exports = {
  initializer,
};
