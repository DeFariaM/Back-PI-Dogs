const { Dog, Temperament } = require("../db");

const getDogsDB = async () => {
  const dogsDB = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const dogsTemps = await dogsDB.map((dog) => {
    const tempDB = dog.Temperaments.map((t) => t.name);
    return { ...dog.get(), Temperaments: tempDB };
  });

  return dogsTemps;
};

module.exports = getDogsDB;
