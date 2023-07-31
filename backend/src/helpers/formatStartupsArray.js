const formatStartupsArray = (startups) => (
  startups.reduce((acc, startup) => {
    const { id, name, description, website, logo, goalId, goalName } = startup;
    const existingStartup = acc.find((item) => item.id === id);
      
    if (existingStartup) {
      existingStartup.goals.push({ id: goalId, name: goalName });
    } else {
        acc.push({
          id,
          name,
          description,
          website,
          logo,
          goals: goalId && goalName ? [{ id: goalId, name: goalName }] : [],
        });
      }
      return acc;
  }, [])
);

module.exports = formatStartupsArray;