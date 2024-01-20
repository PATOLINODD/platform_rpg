const Sequelize = require("sequelize");

const db = new Sequelize({
	dialect: 'sqlite',
	storage: './rgp.sqlite'
});

module.exports = db;