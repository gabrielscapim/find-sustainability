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

const getStartupsByGoal = async (goalId) => {
  const startups = await startupModel.getStartupsByGoal(goalId);

  if (!startups) {
    return { status: 'NOT_FOUND', data: { message: 'Startups not found' } };
  }

  const result = formatStartupsArray(startups);

  return { status: 'SUCESSFUL', data: result };
};

const addStartup = async (startup) => {
  const insertId = await startupModel.addStartup(startup);

  if (!startup) {
    return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to add startup' } };
  }
  
  return { status: 'SUCESSFUL', data: { name: startup.name, id: insertId } };
};

module.exports = {
    getAllStartups,
    getStartupsByName,
    getStartupsByGoal,
    addStartup,
};
