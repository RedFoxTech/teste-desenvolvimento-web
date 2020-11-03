const { getPokemonByIdModel } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await getPokemonByIdModel(id);

    return res.status(200).json(pokemon);
  } catch (err) {
    console.error('getStatsByIdController', err.message);
    return res.status(500).json({ message: 'Error Intern' });
  }
};
