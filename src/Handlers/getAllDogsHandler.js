const getAllDogs = require("../Controllers/getAllDogs");

const getAllDogsHandler = async (req, res) => {
  try {
    const response = await getAllDogs();
    return res.status(200).json(response);
  } catch (error) {}
};

module.exports = getAllDogsHandler;
