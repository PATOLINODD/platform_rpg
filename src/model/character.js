const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../connectDatabase.js");

class Characters extends Model {}

Characters.init({
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
		defaultValue: 0
	},
	points: {
		type: DataTypes.DECIMAL,
		allowNull: false,
		defaultValue: 30
	},
	experience: {
		type: DataTypes.DECIMAL,
		allowNull: false,
		defaultValue: 0
	},
	maxExperience: {
		type: DataTypes.DECIMAL,
		allowNull: false,
		defaultValue: 10
	},
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Characters' // We need to choose the model name
});

module.exports = Characters;


class AbstractCharacter {
	constructor(name, age, role, life, charisma, armor, magicResist, agility, 
				intuition, fisicAtk, perforation, criticChance, manna, magicAtk, compression){
		this.level = 0;
		this.points = 30;
		this.experience = 0;
		this.maxExperience = 10;
		this.name = name;
		this.age = age;
		this.role = role;
		this.life = life;
		this.charisma = charisma;
		this.armor = armor;
		this.magicResist = magicResist;
		this.agility = agility;
		this.intuition = intuition;
		this.fisicAtk = fisicAtk;
		this.perforation = perforation;
		this.criticChance = criticChance;
		this.manna = manna;
		this.magicAtk = magicAtk;
		this.compression = compression;
	}
	getLevel = () => {
		return this.level;
	}
	setLevel = (level) => {
		this.level += level;
	}
	getPoints = () => {
		return this.points;
	}
	setPoints = (points) => {
		this.points += points;
	}
	getExperience = () => {
		return this.experience;
	}
	setExperience = (experience) => {
		this.experience += experience;
		if(this.experience == this.maxEperience){
			this.experience = 0;
			this.setMaxExperience(this.maxEperience * 2);
			this.setLevel(1);
			this.setPoints(10);
		}
		this.experience = +this.experience.toFixed(2);
	}
	getMaxExperience = () => {
		return this.maxExperience;
	}
	setMaxExperience = maxExperience => {
		this.maxEperience = maxEperience;
		this.maxEperience = +this.maxEperience.toFixed(2);
	}
	
	getName = () => {
		return this.name;
	}
	getAge = () => {
		return this.age;
	}
	getRole = () => {
		return this.role;
	}
	setRole = (role) => {
		this.role = role;
	}
	getLife = () => {
		return this.life;
	}
	setLife = life => {
		this.life += life;
		this.life = +this.life.toFixed(2);
	}
	getCharisma = () => {
		return this.charisma;
	}
	setCharisma = charisma => {
		this.charisma += charisma / 5;
		this.charisma = +this.charisma.toFixed(2);
	}
	getArmor = () => {
		return this.armor;
	}
	setArmor = (armor) => {
		this.armor += armor * 5;
		this.armor = +this.armor.toFixed(2);
	}
	getMagicResist = () => {
		return this.magicResist;
	}
	setMagicResist = (magicResist) => {
		this.magicResist += magicResist * 2.5;
		this.magicResist = +this.magicResist.toFixed(2);
	}
	getAgility = () => {
		return this.agility;
	}
	setAgility = (agility) => {
		this.agility += agility / 5;
		this.agility = +this.agility.toFixed(2);
	}
	getFisicAtk = () => {
		return this.fisicAtk;
	}
	setFisicAtk = (fisicAtk) => {
		this.fisicAtk += fisicAtk;
		this.fisicAtk = +this.fisicAtk.toFixed(2);
	}
	getPerforation = () => {
		return this.perforation;
	}
	setPerforation = perforation => {
		this.perforation += perforation / 5;
		this.perforation = +this.perforation.toFixed(2);
	}
	getCriticChance = () => {
		return this.criticChance;
	}
	setCriticChance = criticChance => {
		this.criticChance += criticChance / 5;
		this.criticChance = +this.criticChance.toFixed(2);
	}
	getManna = () => {
		return this.manna;
	}
	setManna = manna => {
		this.manna += manna * 2;
		this.manna = +this.manna.toFixed(2);
	}
	getMagicAtk = () => {
		return this.magicAtk;
	}
	setMagicAtk = magicAtk => {
		this.magicAtk += magicAtk;
		this.magicAtk = +this.magicAtk.toFixed(2);
	}
	getCompression = () => {
		return this.compression;
	}
	setCompression = compression => {
		this.compression = compression / 3;
		this.compression = +compression.toFixed(2);
	}
	
}