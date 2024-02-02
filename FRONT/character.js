class AbstractCharacter {
  constructor() {
    this.name = "";
    this.password = "";
    this.age = 0;
    this.image = null;
    this.level = 0;
    this.points = 0;
    this.experience = 0;
    this.maxExperience = 10;
    this.role = "";
    this.life = 0;
    this.charisma = 0;
    this.armor = 0;
    this.magicResist = 0;
    this.agility = 0;
    this.intuition = 0;
    this.fisicAtk = 0;
    this.perforation = 0;
    this.criticChance = 0;
    this.manna = 0;
    this.magicAtk = 0;
    this.compression = 0;
  }
  getLevel = () => {
    return this.level;
  };
  setLevel = (level) => {
    this.level += level;
  };
  getPoints = () => {
    return this.points;
  };
  setPoints = (points) => {
    this.points += points;
  };
  getExperience = () => {
    return this.experience;
  };
  setExperience = (experience) => {
    this.experience += experience;
    if (this.experience == this.maxEperience) {
      this.experience = 0;
      this.setMaxExperience(this.maxEperience * 2);
      this.setLevel(1);
      this.setPoints(10);
    }
    this.experience = +this.experience.toFixed(2);
  };
  getMaxExperience = () => {
    return this.maxExperience;
  };
  setMaxExperience = (maxExperience) => {
    this.maxEperience = maxExperience;
  };

  getName = () => {
    return this.name;
  };
  setName = (name) => {
    this.name = name;
  };
  getImage = () => {
    return this.image;
  };
  setImage = (image) => {
    this.image = image;
  };
  getAge = () => {
    return this.age;
  };
  getRole = () => {
    return this.role;
  };
  setRole = (role) => {
    this.role = role;
  };
  getLife = () => {
    return this.life;
  };
  setLife = (life) => {
    this.life += life;
  };
  getCharisma = () => {
    return this.charisma;
  };
  setCharisma = (charisma) => {
    this.charisma += charisma / 5;
  };
  getArmor = () => {
    return this.armor;
  };
  setArmor = (armor) => {
    this.armor += +armor * 5;
  };
  getMagicResist = () => {
    return this.magicResist;
  };
  setMagicResist = (magicResist) => {
    this.magicResist += magicResist * 2.5;
  };
  getAgility = () => {
    return this.agility;
  };
  setAgility = (agility) => {
    this.agility += agility / 5;
  };
  getFisicAtk = () => {
    return this.fisicAtk;
  };
  setFisicAtk = (fisicAtk) => {
    this.fisicAtk += fisicAtk;
  };
  getPerforation = () => {
    return this.perforation;
  };
  setPerforation = (perforation) => {
    this.perforation += perforation / 5;
  };
  getCriticChance = () => {
    return this.criticChance;
  };
  setCriticChance = (criticChance) => {
    this.criticChance += criticChance / 5;
  };
  getManna = () => {
    return this.manna;
  };
  setManna = (manna) => {
    this.manna += manna * 2;
  };
  getMagicAtk = () => {
    return this.magicAtk;
  };
  setMagicAtk = (magicAtk) => {
    this.magicAtk += magicAtk;
  };
  getCompression = () => {
    return this.compression;
  };
  setCompression = (compression) => {
    this.compression = compression / 3;
  };
}

const character = new AbstractCharacter();
