const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../connectDatabase.js");


const Characters = sequelize.define("Character", {
	image: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: false
		},
	role: {
		type: DataTypes.STRING,
		allowNull: false
		},
	life: {
		type: DataTypes.DECIMAL,
		allowNull: false
		},
	charisma: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	armor: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	magicResist: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	agility: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	intuition: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	fisicAtk: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	perforation: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	criticChance: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	manna: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	magicAtk: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	compression: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	level: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	points: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	experience: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	maxExperience: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	passive: {
		type: DataTypes.TEXT,
	}
}, {
  modelName: 'Character', // We need to choose the model name
  tableName: 'Characters'
});

module.exports = Characters;