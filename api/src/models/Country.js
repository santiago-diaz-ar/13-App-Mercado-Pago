const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenBandera: {
      type: DataTypes.STRING,
      /* allowNull: false, */
    },
    continente: {
      type: DataTypes.STRING,
      /* allowNull: false, */
    },
    capital: {
      type: DataTypes.STRING,
      /* allowNull: false, */
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    poblacion: {
      type: DataTypes.STRING,
      /* allowNull: false, */
    },
    dificultad: {
      type: DataTypes.STRING,
    },
    duracion: {
      type: DataTypes.STRING,
    },
  });
};
