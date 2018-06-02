const events = require('./events.js');
const data = require('./data.js');

const initializer = () => {
  events.addSearchEvent();
  data.setApiKey();
  console.log('Weather API key from DataGate: ', data.getKey());
  events.add5DayEvent();
  events.addSaveMeEvents();
  events.addSavedForecastsEvent();
  events.addDeleteEvent();
  events.addCheckBoxEvent();
  events.add3DayEvent();
};

module.exports = {
  initializer,
};
