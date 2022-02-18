const Sequelize = require("sequelize");
const dbConfig = require("./config");
const connection = new Sequelize(dbConfig);

const Tag = require('./models/Tag');
const User = require("./models/User");
const Address = require("./models/Address");

Tag.init(connection);
User.init(connection);
Address.init(connection);

Tag.associate(connection.models);
User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
