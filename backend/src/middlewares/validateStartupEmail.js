const { getStartupByEmail } = require('../models/startup.model');

const validateStartupEmail = async (req, _res, next) => {
  const { email } = req.body;
  const startup = await getStartupByEmail(email);
  console.log(startup);
  if (startup) {
    return next({ statusCode: 400, message: 'Startup already exist' });
  }

  return next();
};

module.exports = validateStartupEmail;