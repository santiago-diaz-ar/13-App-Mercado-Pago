const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("country", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.NUMBER,
    },
    temporada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
