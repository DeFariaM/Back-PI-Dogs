const { Temperament } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getTemperaments = async () => {
  try {
    const allTemps = await Temperament.findAll();

    if (!allTemps.length) {
      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );
      const temp = await data.map((dog) => dog.temperament);
      const separate = await temp.join().split(",");
      const trimed = await separate.map((el) => el.trim());

      await trimed.forEach((temp) => {
        temp !== "" && Temperament.findOrCreate({ where: { name: temp } });
      });
    }
    return allTemps;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getTemperaments;
