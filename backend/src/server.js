const app = require('./app');

const PORT = process.env.PORT || 3003;

app.listen(PORT, async () => {
  console.log(`Porta: ${PORT}`);
});
