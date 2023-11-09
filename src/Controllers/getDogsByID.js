const getAllDogs = require("../Controllers/getAllDogs");

const getDogsByID = async (id) => {
  try {
    const dog = await getAllDogs();

    const find = dog.filter((dog) => dog.id == id);

    if (!find.length) throw new Error("This doesn't exists");
    return find[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getDogsByID;
