const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { initializeDatabase } = require("./sequelize");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/pokemons", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send('{ "status": "OK" }');
});

initializeDatabase();

app.listen(process.env.PORT || 81);