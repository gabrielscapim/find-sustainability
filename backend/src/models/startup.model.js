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

const getStartupsByGoal = async (goalId) => {
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
      goals g ON sg.id_goal = g.id WHERE g.id = ?`;

    const [startups] = await connection.execute(QUERY, [goalId]);

    return startups;
};

const addStartup = async (startup) => {
  const { name, description, website, logo, goals } = startup;
  console.log(goals);
  const STARTUP_QUERY = `INSERT INTO startups (name, description, website, logo) 
    VALUES (?, ?, ?, ?)`;
  const STARTUP_GOAL_QUERY = 'INSERT INTO startups_goals (id_startup, id_goal) VALUES (?, ?)';

  const [{ insertId }] = await connection.execute(
    STARTUP_QUERY, [name, description, website, logo],
  );
    console.log(insertId);
  const promises = goals.map(async ({ id }) => {
    console.log(id);
    await connection.execute(STARTUP_GOAL_QUERY, [insertId, id]);
  });

  await Promise.all(promises);

  return insertId;
};

module.exports = {
  getAllStartups,
  getStartupsByName,
  getStartupsByGoal,
  addStartup,
};
