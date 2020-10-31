const { default: app } = require('./app');

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
