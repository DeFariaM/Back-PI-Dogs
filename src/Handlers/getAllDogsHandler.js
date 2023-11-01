const getAllDogs = require("../Controllers/getAllDogs");

const getAllDogsHandler = async (req, res) => {
  try {
    const response = await getAllDogs();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDogsHandler;
