const postDogs = require("../Controllers/postDogs");

const postDogsHandler = async (req, res) => {
  const {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    reference_image_id,
    temperament,
  } = req.body;
  try {
    const createdDog = await postDogs(
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span,
      reference_image_id,
      temperament
    );

    return res
      .status(200)
      .json({ message: "Your dog was created succesfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postDogsHandler;
