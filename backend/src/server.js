const app = require('./app');
const { PORT } = require('./config');

const port = PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
