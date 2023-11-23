require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getDogsAPI = async () => {
  const { data } = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  const dogsAPI = await data.map((dog) => {
    const temperaments = dog.temperament;
    const temps = temperaments
      ? temperaments.split(", ")
      : ["No registered temperaments"];

    const weight = dog.weight.metric.split(" - ");
    const height = dog.height.metric.split(" - ");
    const lifeSpan = dog.life_span.split(" ");
    const lifeMin = lifeSpan[0];
    const lifeMax = isNaN(lifeSpan[2]) ? lifeMin : lifeSpan[2];

    const dogFilter = {
      id: dog.id,
      name: dog.name,
      weight_min: Number(weight[0]),
      weight_max: weight[1] !== null ? Number(weight[1]) : weight_min,
      height_min: Number(height[0]),
      height_max: height[1] !== null ? Number(height[1]) : height_min,
      life_span: lifeMin + " - " + lifeMax,
      image: dog.image.url,
      created: false,
      Temperaments: temps,
    };

    return dogFilter;
  });

  return dogsAPI;
};

module.exports = getDogsAPI;
