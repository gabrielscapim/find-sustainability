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
  const { name, description, website, logo, goals, email, password } = startup;

  const STARTUP_QUERY = `INSERT INTO startups (name, description, website, logo, email, password) 
    VALUES (?, ?, ?, ?, ?, ?)`;
  const STARTUP_GOAL_QUERY = 'INSERT INTO startups_goals (id_startup, id_goal) VALUES (?, ?)';

  const [{ insertId }] = await connection.execute(
    STARTUP_QUERY, [name, description, website, logo, email, password],
  );

  const promises = goals.map(async ({ id }) => {
    await connection.execute(STARTUP_GOAL_QUERY, [insertId, id]);
  });

  await Promise.all(promises);

  return insertId;
};

const getStartupByEmail = async (email) => {
  const QUERY = 'SELECT * FROM startups WHERE email = ?';

  const [[startup]] = await connection.execute(QUERY, [email]);

  return startup;
};

const editStartup = async (startupToUpdate, id) => {
  const { name, description, website, logo } = startupToUpdate;

  const QUERY = 'UPDATE startups SET name = ?, description = ?, website = ?, logo = ? WHERE id = ?';

  const [startup] = await connection.execute(QUERY, [name, description, website, logo, id]);
  
  return startup;
};

const deleteStartup = async (id) => {
  const QUERY = 'DELETE FROM startups WHERE id = ?';
  
  const response = await connection.execute(QUERY, [id]);
  
  return response;
};

module.exports = {
  getAllStartups,
  getStartupsByName,
  getStartupsByGoal,
  addStartup,
  getStartupByEmail,
  editStartup,
  deleteStartup,
};
