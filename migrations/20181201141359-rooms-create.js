

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('rooms', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('rooms'),
};
