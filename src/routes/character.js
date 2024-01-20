const { characterController } = require("../controller");
module.exports = (app) => {
	app.post("/saveCharacter", characterController.saveCharacter);
	app.get("/listCharacters", characterController.listCharacters);
	app.get("/getCharacter/:id", characterController.getCharacterByID);
	app.put("/updateCharacter/:id", characterController.updateCharacterByID);
}