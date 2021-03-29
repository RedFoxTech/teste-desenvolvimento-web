const cors = require('cors');
const helmet = require('helmet');
const { json, urlencoded } = require('express');

function setMiddlewares({ app }) {
  app.use(cors());
  app.use(helmet());
  app.use(json());
  app.use(urlencoded({ extended: true }));

  return;
}

module.exports = { setMiddlewares };