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

const getStartupByEmail = async (email) => {
  const { password, ...startup } = await startupModel.getStartupByEmail(email);

  if (!startup) {
    return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to find startup' } };
  }
  
  return { status: 'SUCESSFUL', data: startup };
};

const editStartup = async (startupToUpdate, id) => {
  const startup = await startupModel.editStartup(startupToUpdate, id);

  if (!startup) {
    return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to update startup' } };
  }
  
  return { status: 'SUCESSFUL', data: startup };
};

const deleteStartup = async (id) => {
  const response = await startupModel.deleteStartup(id);

  if (!response) {
    return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to delete startup' } };
  }
  
  return { status: 'SUCESSFUL', data: response };
};

const getStartupById = async (id) => {
  const { password, ...startup } = await startupModel.getStartupById(id);

  if (!startup) {
    return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to find startup' } };
  }
  
  return { status: 'SUCESSFUL', data: startup };
};

module.exports = {
    getAllStartups,
    getStartupsByName,
    getStartupsByGoal,
    addStartup,
    getStartupByEmail,
    editStartup,
    deleteStartup,
    getStartupById,
};
