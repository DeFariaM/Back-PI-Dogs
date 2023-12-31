const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      weight_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://img.buzzfeed.com/buzzfeed-static/static/2020-10/6/16/campaign_images/9232fa5697f6/solo-alguien-que-realmente-ama-a-los-perritos-va--2-9794-1602001787-17_dblbig.jpg?resize=1200:*",
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
