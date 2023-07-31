const checkRequiredFields = require('../helpers/checkRequiredFields');

const validateStartupFields = (req, _res, next) => {
  const { body } = req;
  const requiredFields = ['name', 'description', 'website', 'logo', 'goals'];

  const requiredFieldError = checkRequiredFields(body, requiredFields);

  if (requiredFieldError) {
    return next({ statusCode: 400, message: requiredFieldError });
  }

  return next();
};

module.exports = validateStartupFields;