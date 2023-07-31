const formatStartupsArray = require('../helpers/formatStartupsArray');
const { startupModel } = require('../models');

const getAllStartups = async () => {
  const startups = await startupModel.getAllStartups();

  if (!startups) {
    return { status: 'NOT_FOUND', data: { message: 'Startups not found' } };
  }

  const result = formatStartupsArray(startups);

  return { status: 'SUCESSFUL', data: result };
};

const getStartupsByName = async (startupName) => {
  const startups = await startupModel.getStartupsByName(startupName);

  if (!startups) {
    return { status: 'NOT_FOUND', data: { message: 'Startups not found' } };
  }

  const result = formatStartupsArray(startups);

  return { status: 'SUCESSFUL', data: result };
};

module.exports = {
    getAllStartups,
    getStartupsByName,
};
