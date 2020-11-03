const { getStatsByIdModel } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const stats = await getStatsByIdModel(id);

    return res.status(200).json(stats);
  } catch (err) {
    console.error('getStatsByIdController', err.message);
    return res.status(500).json({ message: 'Error Intern' });
  }
};
