const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');
const Space = require('./Space');

const Event = sequelize.define('event', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  start: {
    type: Sequelize.DATE,
  },
  end: {
    type: Sequelize.DATE,
  },
  confirmed: {
    type: Sequelize.BOOLEAN,
  },
});

Event.belongsTo(User, { as: 'Owner' });
Event.belongsTo(User, { as: 'Renter' });
Event.belongsTo(Space);

module.exports = Event;
