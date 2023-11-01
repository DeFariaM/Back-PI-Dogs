const { Temperament } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getTemperaments = async () => {
  const { data } = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const temp = await data.map((dog) => dog.temperament);
  const separate = await temp.join().split(",");
  const trimed = await separate.map((el) => el.trim());
  /* console.log(trimed); */

  await trimed.forEach((temp) => {
    temp !== "" && Temperament.findOrCreate({ where: { name: temp } });
  });

  const allTemps = await Temperament.findAll();

  return allTemps;
};

module.exports = getTemperaments;
