const { Router } = require('express');

const router = Router();

function setRoutes({ app }) {

  app.use('/api', router);

  return;
}

module.exports = { setRoutes };