const getDogsByID = require("../Controllers/getDogsByID");

const getDogsByIDHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDogsByID(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getDogsByIDHandler;
