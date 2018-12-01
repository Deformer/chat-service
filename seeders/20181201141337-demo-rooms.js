

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('rooms', [{
    id: 1,
    title: 'Room1',
  }, {
    id: 2,
    title: 'Room2',
  }, {
    id: 3,
    title: 'Room3',
  }], {}),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rooms', null, {});
  },
};
