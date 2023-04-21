'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    names: DataTypes.STRING,
    classe: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};