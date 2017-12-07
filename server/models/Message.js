const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');
const Space = require('./Space');

const Message = sequelize.define('message', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: Sequelize.TEXT,
  },
});

Message.belongsTo(User, { as: 'Renter' });
Message.belongsTo(User, { as: 'Owner' });
Message.belongsTo(Space);

module.exports = Message;
