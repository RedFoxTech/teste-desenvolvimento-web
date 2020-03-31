const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { initializeDatabase } = require("./sequelize");
const { defineRoutes } = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

defineRoutes(app);
initializeDatabase()
  .then(() => {
    console.log("Database initialized");
    const port = process.env.PORT || 81;
    app.listen(port, () => {
      console.log("Server is now listening", port);
    });
  })
  .catch(error => {
    console.log("Failed to initialize database\n", error);
  })
