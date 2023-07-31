const { startupModel } = require('../models');

const getAllStartups = async () => {
  const startups = await startupModel.getAllStartups();

  if (!startups) {
    return { status: 'NOT_FOUND', data: { message: 'Startups not found' } };
}

  return { status: 'SUCESSFUL', data: startups };
};

module.exports = {
    getAllStartups,
};
