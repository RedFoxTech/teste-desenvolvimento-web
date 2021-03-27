const express = require('express');

const { setMiddlewares } = require('../config/middlewares');
const { setRoutes } = require('../config/routes');

const app = new express();

setMiddlewares({ app });
setRoutes({ app });

module.exports = app;