

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_room', {
    roomId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'rooms',
        key: 'id',
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('user_room'),
};
