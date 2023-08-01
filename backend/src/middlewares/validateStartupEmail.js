const { getStartupByEmail } = require('../models/startup.model');

const validateStartupEmail = (req, _res, next) => {
  const { email } = req.body;
  const startup = getStartupByEmail(email);

  if (startup) {
    return next({ statusCode: 400, message: 'Startup already exist' });
  }

  return next();
};

module.exports = validateStartupEmail;