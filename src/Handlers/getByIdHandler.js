const getById = require("../Controllers/getById");

const getByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = getById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getByIdHandler;
