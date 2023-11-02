require("dotenv").config;
const { API_KEY } = process.env;
const axios = require("axios");

const getDogsAPI = async () => {
  const { data } = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  const dogsAPI = await data.map((dog) => {
    const temperaments = dog.temperament;
    const temps = temperaments ? temperaments.split(", ") : [];

    const weight = dog.weight.metric.split(" - ");
    const height = dog.height.metric.split(" - ");
    const dogFilter = {
      id: dog.id,
      name: dog.name,
      weight_min: Number(weight[0]),
      weight_max: weight[1] !== null ? Number(weight[1]) : weight_min,
      height_min: Number(height[0]),
      height_max: height[1] !== null ? Number(height[1]) : height_min,
      life_span: dog.life_span,
      reference_image_id: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
      created: false,
      Temperaments: temps,
    };
    return dogFilter;
  });

  return dogsAPI;
};

module.exports = getDogsAPI;
