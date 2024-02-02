const AbstractController = require("./abstractController.js");
const { Characters } = require("../model");

class CharacterController extends AbstractController {
  constructor(db) {
    super(db);
  }

  saveCharacter = async (data) => {
    console.log("Entering in method saveCharacter(data)");
    let msg = {};
    try {
      msg = await this.save(data);
      if (!msg.error) {
        return msg;
      }
      msg.error = true;
      msg.code = 400;
      msg.result = null;
      msg.msg = "Bad Request. Verify the datas and try again!";
    } catch (error) {
      this.msg.error = true;
      this.msg.code = 500;
      this.msg.msg = "Internal error. Try again later!";
      this.msg.result = error.message;
      console.error(this.msg);
    }
    return msg;
  };
  listCharacters = async () => {
    console.log("Entering in method listCharacters()");
    let msg = {};
    try {
      msg = await this.list();
      if (!msg.error) {
        return msg;
      }
      msg.error = true;
      msg.code = 400;
      msg.result = null;
      msg.msg = "Bad Request. Verify the datas and try again!";
    } catch (error) {
      this.msg.error = true;
      this.msg.code = 500;
      this.msg.msg = "Internal error. Try again later!";
      this.msg.result = error.message;
      console.error(this.msg);
    }
    return msg;
  };

  getCharacterByID = async (id) => {
    console.log("Entering in method getCharacterByID(id)");
    let msg = {};
    try {
      msg = await this.getByID(id);
      if (!msg.error) {
        return msg;
      }
      msg.error = true;
      msg.code = 400;
      msg.result = null;
      msg.msg = "Bad Request. Verify the datas and try again!";
    } catch (error) {
      this.msg.error = true;
      this.msg.code = 500;
      this.msg.msg = "Internal error. Try again later!";
      this.msg.result = error.message;
      console.error(this.msg);
    }
    return msg;
  };
  updateCharacterByID = async (data, id) => {
    console.log("Entering in method updateCharacterByID(data, id)");
    let msg = {};
    try {
      msg = await this.updateByID(req.body, id);
      if (!msg.error) {
        return msg;
      }
      msg.error = true;
      msg.code = 400;
      msg.result = null;
      msg.msg = "Bad Request. Verify the datas and try again!";
    } catch (error) {
      this.msg.error = true;
      this.msg.code = 500;
      this.msg.msg = "Internal error. Try again later!";
      this.msg.result = error.message;
      console.error(this.msg);
    }
    return msg;
  };
}

module.exports = new CharacterController(Characters);
