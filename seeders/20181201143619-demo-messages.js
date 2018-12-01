

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('messages', [{
    id: 1,
    text: 'Hello World',
    roomId: 1,
    userId: 1,
  }, {
    id: 2,
    text: 'Hello',
    roomId: 1,
    userId: 2,
  }, {
    id: 3,
    text: 'Test',
    roomId: 1,
    userId: 1,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('messages', null, {}),
};
