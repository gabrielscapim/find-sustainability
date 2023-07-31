const { startupService } = require('../services');

const serverErrorMessage = { message: 'Erro interno' };

const getAllStartups = async (_req, res) => {
  try {
    const { status, data } = await startupService.getAllStartups();

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(serverErrorMessage);
  }
};

const getStartupsByName = async (req, res) => {
  try {
    const { q: startupName } = req.query;
    const { status, data } = await startupService.getStartupsByName(startupName);

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(serverErrorMessage);
  }
};

const getStartupsByGoal = async (req, res) => {
  try {
    const { id: goalId } = req.query;
    const { status, data } = await startupService.getStartupsByGoal(goalId);

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(serverErrorMessage);
  }
};

const addStartup = async (req, res) => {
  try {
    const startup = req.body;
    const { status, data } = await startupService.addStartup(startup);

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(serverErrorMessage);
  }
};

module.exports = {
  getAllStartups,
  getStartupsByName,
  getStartupsByGoal,
  addStartup,
};
