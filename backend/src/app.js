const express = require('express');
const cors = require('cors');

const Routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3333);
app.use(Routes);

module.exports = app;