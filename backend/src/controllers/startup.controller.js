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

module.exports = {
  getAllStartups,
};
