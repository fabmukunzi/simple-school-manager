'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      // this.belongsToMany(models.Subject,{as:'teacher',through:'subjectId',foreignKey:'teacherId'})
    }
  }
  Teacher.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    names: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    subjects: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
        references: {
          model: 'Subject',
          key: 'id'
        }
    },
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};