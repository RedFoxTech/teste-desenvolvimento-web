const { getModelMap } = require("../sequelize");
const { Op } = require("sequelize");

const createType = type => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemonType.create(type)
      .then(() => resolve({ message: "Type created sucessfully" }))
      .catch(error => reject(error));
  });
};
module.exports.createType = createType;

const getTypes = () => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemonType.findAll()
      .then(types => resolve(types))
      .catch(error => reject(error));
  });
};
module.exports.getTypes = getTypes;

const getTypeById = id => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemonType.findByPk(id)
      .then(type => resolve(type))
      .catch(error => reject(error));
  });
};
module.exports.getTypeById = getTypeById;

const getTypeByName = name => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemonType.findAll({
      where: { name: { [Op.like]: `%${name}%` } }
    }).then(type => resolve(type))
    .catch(error => reject(error));
  });
};
module.exports.getTypeByName = getTypeByName

const updateType = (id, _type) => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemonType.findByPk(id)
      .then(type => {
        for (let prop in _type)
          type[prop] = _type[prop];
        type.save()
          .then(() => resolve({ message: "Type updated sucessfully" }))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};
module.exports.updateType = updateType;

const deleteType = id => {
  return new Promise((resolve, reject) => {
    getModelMap().pokemonType.findByPk(id)
      .then(type => {
        if (type)
          type.destroy()
            .then(() => resolve({ message: "Type removed sucessfully" }))
      })
      .catch(error => reject(error));
  });
};
module.exports.deleteType = deleteType;