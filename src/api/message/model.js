const Sequelize = require('sequelize');

const { sequelize } = require('../../services/postgres');

const Room = require('../room/model');
const User = require('../user/model');

const Message = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.TEXT,
});

Message.belongsTo(Room);
Message.belongsTo(User);

module.exports = Message;
