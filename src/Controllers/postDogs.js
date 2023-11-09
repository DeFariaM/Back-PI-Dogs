const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");

const postDogs = async (
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  life_span,
  reference_image_id,
  temperament
) => {
  try {
    const find = await Dog.findOne({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });
    if (find) throw new Error("That dog breed already exists");

    const newDog = await Dog.create({
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span,
      reference_image_id,
    });

    const temp = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });

    newDog.addTemperament(temp);

    return newDog;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postDogs;
