const { getAttributesByIdModel } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const attributes = await getAttributesByIdModel(id);

    return res.status(200).json(attributes);
  } catch (err) {
    console.error('getAttributesByIdController', err.message);
    return res.status(500).json({ message: 'Error Intern' });
  }
};
