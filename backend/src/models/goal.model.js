const connection = require('./connection');

const getAllGoals = async () => {
  const QUERY = 'SELECT * FROM goals';
  const [goals] = await connection.execute(QUERY);

  return goals;
};

module.exports = {
  getAllGoals,
};
