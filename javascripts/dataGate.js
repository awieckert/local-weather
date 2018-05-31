const events = require('./events.js');
const data = require('./data.js');

const initializer = () => {
  events.addSearchEvent();
  data.setApiKey();
  events.add5DayEvent();
  events.addSaveMeEvents();
};

module.exports = {
  initializer,
};
