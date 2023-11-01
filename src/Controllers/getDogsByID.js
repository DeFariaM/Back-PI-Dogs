const getAllDogs = require("../Controllers/getAllDogs");

const getDogsByID = async (id) => {
  const dog = await getAllDogs();

  const find = dog.filter((dog) => dog.id == id);

  return find;
};

module.exports = getDogsByID;
