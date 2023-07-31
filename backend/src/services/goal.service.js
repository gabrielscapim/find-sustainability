const { goalModal } = require('../models');

const getAllGoals = async () => {
  const goals = await goalModal.getAllGoals();

  if (!goals) {
    return { status: 'NOT_FOUND', data: { message: 'Startups not found' } };
}

  return { status: 'SUCESSFUL', data: goals };
};

module.exports = {
    getAllGoals,
};
