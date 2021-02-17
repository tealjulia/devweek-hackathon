const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEntryInput(data) {
  let errors = {};

  if (!Validator.isLength(data, { min: 1, max: 1000 })) {
    errors.text = "Entry must be between 1 and 1000 characters";
  }

  if (isEmpty(data)) {
    errors.text = "Entry field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};