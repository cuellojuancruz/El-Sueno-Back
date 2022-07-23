const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
  module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
      id: {
        type: DataTypes.FLOAT ,
        primaryKey: true
    },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mail: {
        type: DataTypes.TEXT
      },
      image:{
        type: DataTypes.TEXT
      },
      typeuser:{
        type: DataTypes.TEXT
      },
      verified:{
        type: DataTypes.BOOLEAN
      }
    });
  };