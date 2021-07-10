const dotenv = require('dotenv')
dotenv.config()

const production = process.env.NODE_ENV === "production";

const URL = production ? "https://red-fox-dev-assessment.herokuapp.com/" : "http://localhost:3000";


module.exports = URL;