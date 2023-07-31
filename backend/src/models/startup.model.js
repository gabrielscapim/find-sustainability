const connection = require('./connection');

const getAllStartups = async () => {
  const QUERY = 'SELECT * FROM startups';
  const [startups] = await connection.execute(QUERY);

  return startups;
};

module.exports = {
  getAllStartups,
};
