const Sequelize = require('sequelize');

const { sequelize } = require('../../services/postgres');
const User = require('../user/model');

const Room = sequelize.define('room', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
});

Room.belongsToMany(User, { through: 'user_room' });

module.exports = Room;
