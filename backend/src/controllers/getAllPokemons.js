const { getAllPokemonsModel } = require('../models');

module.exports = async (req, res) => {
  try {
    const pokemons = await getAllPokemonsModel();

    return res.status(200).json(pokemons);
  } catch (err) {
    console.error('getAllPokemonsController', err.message);
    return res.status(500).json({ message: 'Error Intern' });
  }
};
