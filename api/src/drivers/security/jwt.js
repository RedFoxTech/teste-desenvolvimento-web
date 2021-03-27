require('dotenv').config();
const jwt = require("jsonwebtoken");

function createToken({ id }) {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '3d'
  });

  return token;
}

function isTokenValid({ token }, callback) {
  jwt.verify(token, process.env.SECRET, callback);
}

module.exports = {
  createToken,
  isTokenValid,
}