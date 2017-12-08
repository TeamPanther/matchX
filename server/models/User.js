const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('user', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: { 
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: [],
  },
  rating: {
    // type: Sequelize.DECIMAL(2, 1),
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: null,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genderPreference: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  question1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  question2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  question3: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  question4: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  question5: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
module.exports = User;
