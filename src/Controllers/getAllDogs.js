const getDogsAPI = require("../Gets/getDogsAPI");
const getDogsDB = require("../Gets/getDogsDB");

const getAllDogs = async () => {
  const API = await getDogsAPI();
  const DB = await getDogsDB();
};

module.exports = getAllDogs;
