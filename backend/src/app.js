const cors = require('cors');
const express = require('express');
const { pokemonRouter } = require('./router');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pokemonRouter);

module.exports = app;
