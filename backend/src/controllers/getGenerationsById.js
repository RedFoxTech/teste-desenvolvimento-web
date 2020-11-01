const { getGenerationsByIdModel } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const generation = await getGenerationsByIdModel(id);

    return res.status(200).json(generation);
  } catch (err) {
    console.error('getGenerationsByIdController', err.message);
    return res.status(500).json({ message: 'Error Intern' });
  }
};
