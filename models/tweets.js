'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tweets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tweets.init({
    userid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    like: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tweets',
  });
  return tweets;
};