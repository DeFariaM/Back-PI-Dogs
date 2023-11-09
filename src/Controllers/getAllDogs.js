const getDogsAPI = require("../Gets/getDogsAPI");
const getDogsDB = require("../Gets/getDogsDB");

const getAllDogs = async () => {
  try {
    const API = await getDogsAPI();
    const DB = await getDogsDB();

    if (!API.length && !DB.length) throw new Error("The doggies wasn't found");

    return [...API, ...DB];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getAllDogs;
