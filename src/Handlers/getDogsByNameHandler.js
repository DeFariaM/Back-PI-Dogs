const getDogsByName = require("../Controllers/getDogsByName");

const getDogsByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const response = await getDogsByName(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDogsByNameHandler;
