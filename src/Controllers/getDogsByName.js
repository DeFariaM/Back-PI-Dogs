const getAllDogs = require("./getAllDogs");

const getDogsByName = async (name) => {
  try {
    const allDogs = await getAllDogs();

    const find = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    if (!find.length) throw new Error("That dog breed doesn't exists");
    return find;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getDogsByName;
