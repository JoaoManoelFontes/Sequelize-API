const Sequelize = require("sequelize");
const dbConfig = require("./config");
const connection = new Sequelize(dbConfig);

const User = require("./models/User");
const Address = require("./models/Address");

User.init(connection);
Address.init(connection);

Address.associate(connection.models);

module.exports = connection;
