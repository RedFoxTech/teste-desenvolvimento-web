const { getModelMap } = require("../sequelize");
const { Op } = require("sequelize");

const createWeather = weather => {
  return new Promise((resolve, reject) => {
    getModelMap().weather.create(weather)
      .then(() => resolve({ message: "Weather created sucessfully" }))
      .catch(error => reject(error));
  });
};
module.exports.createWeather = createWeather;

const getWeathers = () => {
  return new Promise((resolve, reject) => {
    getModelMap().weather.findAll()
      .then(weathers => resolve(weathers))
      .catch(error => reject(error));
  });
};
module.exports.getWeathers = getWeathers;

const getWeatherById = id => {
  return new Promise((resolve, reject) => {
    getModelMap().weather.findByPk(id)
      .then(weather => resolve(weather))
      .catch(error => reject(error));
  });
};
module.exports.getWeatherById = getWeatherById;

const getWeatherByName = name => {
  return new Promise((resolve, reject) => {
    getModelMap().weather.findAll({
      where: { name: { [Op.like]: `%${name}%` } }
    }).then(weather => resolve(weather))
      .catch(error => reject(error));
  });
};
module.exports.getWeatherByName = getWeatherByName;

const updateWeather = (id, _weather) => {
  return new Promise((resolve, reject) => {
    getModelMap().weather.findByPk(id)
      .then(weather => {
        for (let prop in _weather)
          weather[prop] = _weather[prop];
        weather.save()
          .then(() => resolve({ message: "Weather updated sucessfully" }))
          .catch(error => reject(error));
      });
  });
};
module.exports.updateWeather = updateWeather;

const deleteWeather = id => {
  return new Promise((resolve, reject) => {
    getModelMap().weather.findByPk(id)
      .then(weather => {
        weather.destroy()
          .then(() => resolve({ message: "Weather removed sucessfully" }))
          .catch(error => reject(error));
      });
  });
};
module.exports.deleteWeather = deleteWeather;