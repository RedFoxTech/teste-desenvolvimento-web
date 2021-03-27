const express = require('express');
const path = require('path');

const { setMiddlewares } = require('../config/middlewares');
const { setRoutes } = require('../config/routes');

const app = new express();

app.use('/api/images', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')));
setMiddlewares({ app });
setRoutes({ app });

module.exports = app;