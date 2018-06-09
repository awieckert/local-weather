// Validate Search ---- is US Zip Code

const validateSearch = (input) => {
  const checkedInput = /^\d+$/.test(input);
  if (checkedInput && input.length === 5) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  validateSearch,
};
