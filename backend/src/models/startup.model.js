const connection = require('./connection');

const getAllStartups = async () => {
  const QUERY = `SELECT
      s.id,
      s.name,
      s.description,
      s.website,
      s.logo,
      g.id as goalId,
      g.name as goalName
    FROM
      startups s
    INNER JOIN
      startups_goals sg ON s.id = sg.id_startup
    INNER JOIN
      goals g ON sg.id_goal = g.id;`;
  const [startups] = await connection.execute(QUERY);

  return startups;
};

const getStartupsByName = async (startupName) => {
  const QUERY = `SELECT
      s.id,
      s.name,
      s.description,
      s.website,
      s.logo,
      g.id as goalId,
      g.name as goalName
    FROM
      startups s
    INNER JOIN
      startups_goals sg ON s.id = sg.id_startup
    INNER JOIN
      goals g ON sg.id_goal = g.id WHERE s.name LIKE ?`;

    const [startups] = await connection.execute(QUERY, [`%${startupName}%`]);

    return startups;
};

module.exports = {
  getAllStartups,
  getStartupsByName,
};
