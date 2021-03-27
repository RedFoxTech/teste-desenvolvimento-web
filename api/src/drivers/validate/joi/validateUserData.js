const Joi = require("joi");

function isValidEmail(email) {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .max(255)
      .pattern(new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
  });

  const { error } = schema.validate({ email });

  return error ? false : true;
}

function isValidName(name) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(255)
      .required()
  });

  const { error } = schema.validate({ name });

  return error ? false : true;
}

function isValidPassword(password) {
  const schema = Joi.object({
    password: Joi.string()
      .min(6)
      .max(255)
      .required()
  });

  const { error } = schema.validate({ password });

  return error ? false : true;
}

function isValidUserData(name, email, password) {
  if (!isValidEmail(email)) return false;
  if (!isValidName(name)) return false;
  if (!isValidPassword(password)) return false;

  return true;
} 

module.exports = {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidUserData,
};