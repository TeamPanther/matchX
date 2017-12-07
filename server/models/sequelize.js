const Sequelize = require('sequelize');

const sequelize = new Sequelize('spaceex', 'panther', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize.sync();

module.exports = sequelize;
