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
};

module.exports = postDogs;
