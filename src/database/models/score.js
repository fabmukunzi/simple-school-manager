'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    static associate(models) {
      // define association here
    }
  }
  Score.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    subject: DataTypes.UUID,
    student: DataTypes.UUID,
    work: DataTypes.UUID,
    marks: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};