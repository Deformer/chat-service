

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('user_room', [{
    roomId: 1,
    userId: 1,
  }, {
    roomId: 1,
    userId: 2,
  }, {
    roomId: 2,
    userId: 2,
  }, {
    roomId: 2,
    userId: 3,
  }, {
    roomId: 3,
    userId: 1,
  }, {
    roomId: 3,
    userId: 2,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('user_room', null, {}),
};
