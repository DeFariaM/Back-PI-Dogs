const getTemperaments = require("../Controllers/getTemperaments");

const getTempHandler = async (req, res) => {
  try {
    const response = await getTemperaments();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getTempHandler;
