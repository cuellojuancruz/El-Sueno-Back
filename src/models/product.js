const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
  module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
      id: {
        type: DataTypes.FLOAT ,
        primaryKey: true
    },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      details: {
        type: DataTypes.TEXT
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      }
    });
  };


