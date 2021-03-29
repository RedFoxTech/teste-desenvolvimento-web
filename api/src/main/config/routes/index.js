const { Router } = require('express');

const pokemonRoutes = require('../../../interface/routes/pokemon-routes');
const userRoutes = require('../../../interface/routes/user-routes');

const router = Router();

function setRoutes({ app }) {
  router.use(pokemonRoutes);
  router.use(userRoutes);
  
  app.use('/api', router);

  return;
}

module.exports = { setRoutes };