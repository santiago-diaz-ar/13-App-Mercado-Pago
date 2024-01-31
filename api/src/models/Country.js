const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      defaultValue: () =>
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0"),
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenBandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
