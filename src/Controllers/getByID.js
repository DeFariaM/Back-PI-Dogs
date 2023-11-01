const getAllDogs = require("./getAllDogs");

const getById = async (id) => {
  const allDogs = await getAllDogs();

  const find = await allDogs.filter((dog) => dog.id == id);
  return find;
};

module.exports = getById;
