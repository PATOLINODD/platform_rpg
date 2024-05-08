const AbstractController = require("./abstractController.js");
const { Characters } = require("../model");

class CharacterController extends AbstractController {
  constructor(db) {
    super(db);
  }

  saveCharacter = async (data) => {
    console.log("Entering in method saveCharacter(data)");
    try {
      await this.save(data);
      if (!this.msg.error) {
        return this.msg;
      }
      return this.msg;
    } catch (error) {
      console.error(this.msg);
    }
    return this.msg;
  };
  listCharacters = async () => {
    console.log("Entering in method listCharacters()");
    try {
      await this.list();
      if (!this.msg.error) {
        return this.msg;
      }
      return this.msg;
    } catch (error) {
      console.error(this.msg);
    }
    return this.msg;
  };

  getUserByNamePass = async (login) => {
    console.log("Entering in method getUserByNamePass(login)");
    try {
      const where = {
        name: login.name,
        password: login.password,
      };
      await this.getByWhere(where);
      if (!this.msg.error) {
        return this.msg;
      }
      return this.msg;
    } catch (error) {
      console.error(this.msg);
    }
    return this.msg;
  };
  updateCharacterByID = async (data) => {
    console.log("Entering in method updateCharacterByID(data)");
    try {
      await this.updateByID(data, data.id);
      if (!this.msg.error) {
        return this.msg;
      }
    } catch (error) {
      console.error(this.msg);
    }
    return this.msg;
  };

  deleteCharacterByID = async (id) => {
    console.log("Entering in method deleteCharacterByID(id)");
    try {
      await this.delete(id);
      if (!this.msg.error) {
        return this.msg;
      }
    } catch (error) {
      console.error(error.message);
    }
    return this.msg;
  };
}

module.exports = new CharacterController(Characters);
