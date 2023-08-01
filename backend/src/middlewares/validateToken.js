const { getPayload } = require('../security/authFunctions');

const validateToken = async (req, _res, next) => {
  const { headers: { authorization } } = req;

  if (!authorization) {
      return next({ statusCode: 401, message: 'Token not found' });
  }

  try {
    const payload = getPayload(authorization);
    req.payload = payload;
            
    return next();
  } catch (error) {
      console.log(error);
      return next({ statusCode: 401, message: 'Expired or invalid token' });
    }
};

module.exports = {
    validateToken,
};