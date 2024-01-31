const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.STRING,
    },
    duracion: {
      type: DataTypes.NUMBER,
    },
    temporada: {
      type: DataTypes.STRING,
    },
  });
};
