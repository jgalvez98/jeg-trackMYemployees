const Sequelize = require('sequelize');

const sequelize = new Sequelize('your_data_base', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;