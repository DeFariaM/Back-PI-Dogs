const getAllDogs = require("./getAllDogs");

const getDogsByName = async (name) => {
  const allDogs = await getAllDogs();

  const find = allDogs.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );
  return find;
};

module.exports = getDogsByName;
