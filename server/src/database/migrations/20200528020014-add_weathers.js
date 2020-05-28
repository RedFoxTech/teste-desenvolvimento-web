var weathers = [
  {weather: 'Sunny/clear', created_at: new Date(), updated_at: new Date()},
  {weather: 'Rainy', created_at: new Date(), updated_at: new Date()},
  {weather: 'Cloudy', created_at: new Date(), updated_at: new Date()},
  {weather: 'Windy', created_at: new Date(), updated_at: new Date()},
  {weather: 'Partly cloudy', created_at: new Date(), updated_at: new Date()},
  {weather: 'Snow', created_at: new Date(), updated_at: new Date()},
  {weather: 'Fog', created_at: new Date(), updated_at: new Date()},
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('weathers', weathers);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('weathers', null, {});
  }
};
